import { commit } from './index';
import * as refs from '../refs';
import * as objects from '../objects';
import * as diff from '../diff';
import * as _merge from '../merge';
import * as config from '../config';
import * as files from '../files';

export const merge = (ref, _) => {
    files.assertInRepo();
    config.assertNotBare();

    const receiverHash = refs.hash('HEAD');

    const giverHash = refs.hash(ref);

    if (refs.isHeadDetached()) {
        throw new Error('unsupported');
    } else if (giverHash === undefined || objects.type(objects.read(giverHash)) !== 'commit') {
        throw new Error(ref + ': expected commit type');
    } else if (objects.isUpToDate(receiverHash, giverHash)) {
        return 'Already up-to-date';
    }

    const paths = diff.changedFilesCommitWouldOverwrite(giverHash);

    if (paths.length > 0) {
        throw new Error('local changes would be lost\n' + paths.join('\n') + '\n');
    } else if (_merge.canFastForward(receiverHash, giverHash)) {
        _merge.writeFastForwardMerge(receiverHash, giverHash);
        return 'Fast-forward';
    }

    _merge.writeNonFastForwardMerge(receiverHash, giverHash, ref);

    if (_merge.hasConflicts(receiverHash, giverHash)) {
        return 'Automatic merge failed. Fix conflicts and commit the result.';
    }

    return commit();
};
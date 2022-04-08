import { commit } from './index.js';
import * as refs from '../refs/index.js';
import * as objects from '../objects/index.js';
import * as diff from '../diff/index.js';
import * as _merge from '../merge/index.js';
import * as config from '../config/index.js';
import * as files from '../files/index.js';

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
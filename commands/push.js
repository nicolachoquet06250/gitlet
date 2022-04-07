import { update_ref } from './index';
import * as refs from '../refs';
import * as objects from '../objects';
import * as merge from '../merge';
import * as config from '../config';
import * as util from '../util';
import * as files from '../files';

export const push = (remote, branch, options = {}) => {
    files.assertInRepo();

    if (remote === undefined || branch === undefined) {
        throw new Error('unsupported');
    } else if (!(remote in config.read().remote)) {
        throw new Error(remote + ' does not appear to be a git repository');
    }

    const remotePath = config.read().remote[remote].url;
    const remoteCall = util.onRemote(remotePath);

    if (remoteCall(refs.isCheckedOut, branch)) {
        throw new Error('refusing to update checked out branch ' + branch);
    }

    const receiverHash = remoteCall(refs.hash, branch);

    const giverHash = refs.hash(branch);

    if (objects.isUpToDate(receiverHash, giverHash)) {
        return 'Already up-to-date';
    } else if (!options.f && !merge.canFastForward(receiverHash, giverHash)) {
        throw new Error('failed tu push some refs to ' + remotePath);
    }

    objects.allObjects().forEach(o => remoteCall(objects.write, o));

    remoteCall(update_ref, refs.toLocalRef(branch), giverHash);

    update_ref(refs.toRemoteRef(remote, branch), giverHash);

    return [
        'To ' + remotePath,
        'Could ' + objects.allObjects().length,
        branch + ' -> ' + branch
    ].join('\n') + '\n';
};
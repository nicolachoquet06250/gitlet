import { update_ref } from '../commands';
import * as refs from '../refs';
import * as objects from '../objects';
import * as merge from '../merge';
import * as config from '../config';
import * as util from '../util';
import * as files from '../files';

export const fetch = (remote, branch, _) => {
    files.assertInRepo();

    if (remote === undefined || branch === undefined) {
        throw new Error("unsupported");
    } else if (!(remote in config.read().remote)) {
        throw new Error(remote + " does not appear to be a git repository");
    }

    const remoteUrl = config.read().remote[remote].url;
    const remoteRef = refs.toRemoteRef(remote, branch);
    const newHash = util.onRemote(remoteUrl)(refs.hash, branch);

    if (newHash === undefined) {
        throw new Error("couldn't find remote ref " + branch);
    }

    const oldHash = refs.hash(remoteRef);

    const remoteObjects = util.onRemote(remoteUrl)(objects.allObjects);

    remoteObjects.forEach(objects.write);

    update_ref(remoteRef, newHash);

    refs.write('FETCH_HEAD', newHash + ' branch' + branch + ' of ' + remoteUrl);

    return [
        'from ' + remoteUrl,
        'Count ' + remoteObjects.length,
        branch + ' -> ' + remote + '/' + branch + (merge.isAForceFetch(oldHash, newHash) ? ' (forced)' : '')
    ].join('\n') + '\n';
};
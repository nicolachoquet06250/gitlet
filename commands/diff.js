import * as refs from '../refs';
import * as config from '../config';
import * as files from '../files';
import * as _diff from '../diff';

export const diff = (ref1, ref2, options = {}) => {
    files.assertInRepo();
    config.assertNotBare();

    if (ref1 !== undefined && refs.hash(ref1) === undefined) {
        throw new Error("ambiguous argument " + ref1 + ": unknown revision");
    } else if (ref2 !== undefined && refs.hash(ref2) === undefined) {
        throw new Error("ambiguous argument " + ref2 + ": unknown revision");
    }

    const nameToStatus = _diff.nameStatus(_diff.diff(refs.hash(ref1), refs.hash(ref2)));

    return Object.keys(nameToStatus)
        .map(path => nameToStatus[path] + ' ' + path)
        .join('\n') + '\n';
};
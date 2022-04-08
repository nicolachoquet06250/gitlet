import * as refs from '../refs/index.js';
import * as config from '../config/index.js';
import * as files from '../files/index.js';
import * as _diff from '../diff/index.js';

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
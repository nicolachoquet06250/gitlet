import { fetchHeadBranchToMerge, exists, terminalRef, headBranchName } from './index.js';
import * as objects from '../objects/index.js';
import * as files from '../files/index.js';

export const hash = refOrHash => {
    if (objects.exists(refOrHash)) {
        return refOrHash;
    }

    const terminalRef = terminalRef(refOrHash);

    if (terminalRef === 'FETCH_HEAD') {
        return fetchHeadBranchToMerge(headBranchName());
    } else if (exists(terminalRef)) {
        return files.read(files.gitletPath(terminalRef));
    }
};
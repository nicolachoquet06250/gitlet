import { fetchHeadBranchToMerge, exists, terminalRef, headBranchName } from './index';
import * as objects from '../objects';
import * as files from '../files';

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
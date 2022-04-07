import {FILE_STATUS} from "../diff";
import * as refs from '../refs';
import * as files from '../files';
import {mergeDiff} from './index';

export const writeMergeMsg = (receiverHash, giverHash, ref) => {
    let msg = "Merge " + ref + " into " + refs.headBranchName();

    const mergeDiff = mergeDiff(receiverHash, giverHash);
    const conflicts = Object.keys(mergeDiff)
        .filter(function(p) { return mergeDiff[p].status === FILE_STATUS.CONFLICT });
    if (conflicts.length > 0) {
        msg += "\nConflicts:\n" + conflicts.join("\n");
    }

    files.write(files.gitletPath("MERGE_MSG"), msg);
};
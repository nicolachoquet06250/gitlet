import {FILE_STATUS} from "../diff";
import * as merge from '../merge';

export const hasConflicts = (receiverHash, giverHash) => {
    const mergeDiff = merge.mergeDiff(receiverHash, giverHash);

    return Object.keys(mergeDiff)
        .filter(p => mergeDiff[p].status === FILE_STATUS.CONFLICT).length > 0
};
import {FILE_STATUS} from "../diff/index.js";
import * as merge from '../merge/index.js';

export const hasConflicts = (receiverHash, giverHash) => {
    const mergeDiff = merge.mergeDiff(receiverHash, giverHash);

    return Object.keys(mergeDiff)
        .filter(p => mergeDiff[p].status === FILE_STATUS.CONFLICT).length > 0
};
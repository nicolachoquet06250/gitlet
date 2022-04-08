import {hash} from "./index.js";
import * as merge from '../merge/index.js';

export const commitParentHashes = () => {
    const headHash = hash('HEAD');

    if (merge.isMergeInProgress()) {
        return [headHash, hash('MERGE_HEAD')];
    } else if (headHash === undefined) {
        return [];
    }

    return [headHash];
};
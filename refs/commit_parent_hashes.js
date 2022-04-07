import {hash} from "./index";
import * as merge from '../merge';

export const commitParentHashes = () => {
    const headHash = hash('HEAD');

    if (merge.isMergeInProgress()) {
        return [headHash, hash('MERGE_HEAD')];
    } else if (headHash === undefined) {
        return [];
    }

    return [headHash];
};
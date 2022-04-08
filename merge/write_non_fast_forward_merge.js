import * as refs from '../refs/index.js';
import * as workingCopy from "../workingCopy/index.js";
import * as config from '../config/index.js';
import {writeMergeMsg, writeIndex, mergeDiff} from './index.js';

export const writeNonFastForwardMerge = (receiverHash, giverHash, giverRef) => {
    refs.write("MERGE_HEAD", giverHash);
    writeMergeMsg(receiverHash, giverHash, giverRef);
    writeIndex(receiverHash, giverHash);

    if (!config.isBare()) {
        workingCopy.write(mergeDiff(receiverHash, giverHash));
    }
};
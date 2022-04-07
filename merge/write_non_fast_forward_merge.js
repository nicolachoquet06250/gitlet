import * as refs from '../refs';
import * as workingCopy from "../workingCopy";
import * as config from '../config';
import {writeMergeMsg, writeIndex, mergeDiff} from './index';

export const writeNonFastForwardMerge = (receiverHash, giverHash, giverRef) => {
    refs.write("MERGE_HEAD", giverHash);
    writeMergeMsg(receiverHash, giverHash, giverRef);
    writeIndex(receiverHash, giverHash);

    if (!config.isBare()) {
        workingCopy.write(mergeDiff(receiverHash, giverHash));
    }
};
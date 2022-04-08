import * as refs from '../refs/index.js';
import * as index from '../index/index.js';
import * as diff from '../diff/index.js';
import * as objects from '../objects/index.js';
import * as workingCopy from "../workingCopy/index.js";
import * as config from '../config/index.js';

export const writeFastForwardMerge = (receiverHash, giverHash) => {
    refs.write(refs.toLocalRef(refs.headBranchName()), giverHash);
    index.write(index.tocToIndex(objects.commitToc(giverHash)));

    if (!config.isBare()) {
        const receiverToc = receiverHash === undefined ? {} : objects.commitToc(receiverHash);
        workingCopy.write(diff.tocDiff(receiverToc, objects.commitToc(giverHash)));
    }
};
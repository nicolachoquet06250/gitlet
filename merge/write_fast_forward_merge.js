import * as refs from '../refs';
import * as index from '../index';
import * as diff from '../diff';
import * as objects from '../objects';
import * as workingCopy from "../workingCopy";
import * as config from '../config';

export const writeFastForwardMerge = (receiverHash, giverHash) => {
    refs.write(refs.toLocalRef(refs.headBranchName()), giverHash);
    index.write(index.tocToIndex(objects.commitToc(giverHash)));

    if (!config.isBare()) {
        const receiverToc = receiverHash === undefined ? {} : objects.commitToc(receiverHash);
        workingCopy.write(diff.tocDiff(receiverToc, objects.commitToc(giverHash)));
    }
};
import * as objects from '../objects/index.js';

export const isUpToDate = (receiverHash, giverHash) => receiverHash !== undefined &&
    (receiverHash === giverHash || objects.isAncestor(receiverHash, giverHash));
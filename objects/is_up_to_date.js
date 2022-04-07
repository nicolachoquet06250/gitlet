import * as objects from '../objects';

export const isUpToDate = (receiverHash, giverHash) => receiverHash !== undefined &&
    (receiverHash === giverHash || objects.isAncestor(receiverHash, giverHash));
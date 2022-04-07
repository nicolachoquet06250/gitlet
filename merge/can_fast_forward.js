import * as objects from '../objects';

export const canFastForward = (receiverHash, giverHash) => receiverHash === undefined || objects.isAncestor(giverHash, receiverHash);
import * as objects from '../objects/index.js';

export const canFastForward = (receiverHash, giverHash) => receiverHash === undefined || objects.isAncestor(giverHash, receiverHash);
import * as objects from '../objects/index.js';

export const isAForceFetch = (receiverHash, giverHash) => receiverHash !== undefined && !objects.isAncestor(giverHash, receiverHash);
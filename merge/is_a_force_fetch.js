import * as objects from '../objects';

export const isAForceFetch = (receiverHash, giverHash) => receiverHash !== undefined && !objects.isAncestor(giverHash, receiverHash);
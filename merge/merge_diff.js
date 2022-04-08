import * as diff from '../diff/index.js';
import * as objects from '../objects/index.js';
import { commonAncestor } from './index.js';

export const mergeDiff = (receiverHash, giverHash) => diff.tocDiff(
    objects.commitToc(receiverHash),
    objects.commitToc(giverHash),
    objects.commitToc(commonAncestor(receiverHash, giverHash))
);
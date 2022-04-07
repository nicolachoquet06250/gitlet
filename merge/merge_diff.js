import * as diff from '../diff';
import * as objects from '../objects';
import { commonAncestor } from './index';

export const mergeDiff = (receiverHash, giverHash) => diff.tocDiff(
    objects.commitToc(receiverHash),
    objects.commitToc(giverHash),
    objects.commitToc(commonAncestor(receiverHash, giverHash))
);
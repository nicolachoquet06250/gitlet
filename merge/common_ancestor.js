import * as objects from '../objects/index.js';
import * as util from '../util/index.js';

export const commonAncestor = (aHash, bHash) => {
    [aHash, bHash] = [aHash, bHash].sort();

    const aAncestors = [aHash].concat(objects.ancestors(aHash));
    const bAncestors = [bHash].concat(objects.ancestors(bHash));
    return util.intersection(aAncestors, bAncestors)[0];
};
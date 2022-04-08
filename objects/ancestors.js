import {read, parentHashes} from "./index.js";
import * as util from '../util/index.js';

export const ancestors = commitHash => {
    const parents = parentHashes(read(commitHash));
    return util.flatten(parents.map(ancestors));
};
import {read, parentHashes} from "./index";
import * as util from '../util';

export const ancestors = commitHash => {
    const parents = parentHashes(read(commitHash));
    return util.flatten(parents.map(ancestors));
};
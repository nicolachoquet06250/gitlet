import {key} from "./key";
import * as util from '../util';

export const tocToIndex = toc => Object.keys(toc)
    .reduce((idx, p) => util.setIn(idx, [key(p, 0), toc[p]]), {});
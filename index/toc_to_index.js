import {key} from "./index.js";
import * as util from '../util/index.js';

export const tocToIndex = toc => Object.keys(toc)
    .reduce((idx, p) => util.setIn(idx, [key(p, 0), toc[p]]), {});
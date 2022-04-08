import {read} from "./index.js";
import * as util from '../util/index.js';

export const toc = () => {
    const idx = read();
    return Object.keys(idx)
        .reduce((obj, k) => util.setIn(obj, [k.split(',')[0], idx[k]]), {});
};
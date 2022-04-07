import {FILE_STATUS} from "./index";
import * as util from '../util';

export const nameStatus = diff => Object.keys(diff)
    .filter(p => diff[p].status !== FILE_STATUS.SAME)
    .reduce((ns, p) => util.setIn(ns, [p, diff[p].status]), {});
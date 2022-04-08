import fs from 'fs';
import {read} from "./index.js";
import * as util from '../util/index.js';
import * as files from '../files/index.js';

export const workingCopyToc = () => Object.keys(read())
    .map(k => k.split(',')[0])
    .filter(p => fs.existsSync(files.workingCopyPath(p)))
    .reduce((idx, p) => {
        idx[p] = util.hash(files.read(files.workingCopyPath(p)));
        return idx;
    }, {});
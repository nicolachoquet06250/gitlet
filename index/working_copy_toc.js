import fs from 'fs';
import {read} from "./index";
import * as util from '../util';
import * as files from '../files';

export const workingCopyToc = () => Object.keys(read())
    .map(k => k.split(',')[0])
    .filter(p => fs.existsSync(files.workingCopyPath(p)))
    .reduce((idx, p) => {
        idx[p] = util.hash(files.read(files.workingCopyPath(p)));
        return idx;
    }, {});
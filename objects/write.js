import path from 'path';
import * as util from '../util/index.js';
import * as files from '../files/index.js';

export const write = str => {
    files.write(path.join(files.gitletPath(), 'objects', util.hash(str)), str);
    return util.hash(str);
};
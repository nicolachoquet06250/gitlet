import path from 'path';
import * as util from '../util';
import * as files from '../files';

export const write = str => {
    files.write(path.join(files.gitletPath(), 'objects', util.hash(str)), str);
    return util.hash(str);
};
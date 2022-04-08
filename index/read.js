import fs from 'fs';
import {key} from './index.js';
import * as util from '../util/index.js';
import * as files from '../files/index.js';

export const read = () => {
    const indexFilePath = files.gitletPath('index');
    return util.lines(fs.existsSync(indexFilePath) ? read(indexFilePath) : '\n')
        .reduce((idx, blobStr) => {
            const blobData = blobStr.split(/ /);
            idx[key(blobData[0], blobData[1])] = blobData[2];
            return idx;
        }, {});
};
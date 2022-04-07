import nodePath from 'path';
import fs from 'fs';
import {lsRecursive} from './index';

export const lsRecursive = path => {
    if (!fs.existsSync(path)) {
        return [];
    } else if (fs.statSync(path).isFile()) {
        return [path];
    } else if (fs.statSync(path).isDirectory()) {
        return fs.readdirSync(path).reduce((fileList, dirChild) => fileList.concat(lsRecursive(nodePath.join(path, dirChild))), []);
    }
};
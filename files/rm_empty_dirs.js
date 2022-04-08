import nodePath from 'path';
import fs from 'fs';

export const rmEmptyDirs = path => {
    if (fs.statSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(c => rmEmptyDirs(nodePath.join(path, c)));
        if (fs.readdirSync(path).length === 0) {
            fs.rmdirSync(path);
        }
    }
};
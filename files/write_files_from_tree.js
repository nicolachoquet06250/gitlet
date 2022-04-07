import fs from 'fs';
import nodePath from 'path';
import * as util from '../util';
import {writeFilesFromTree} from './index';

export const writeFilesFromTree = (tree, prefix) => {
    Object.keys(tree).forEach(name => {
        const path = nodePath.join(prefix, name);
        if (util.isString(tree[name])) {
            fs.writeFileSync(path, tree[name]);
        } else {
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, "777");
            }

            writeFilesFromTree(tree[name], path);
        }
    });
};
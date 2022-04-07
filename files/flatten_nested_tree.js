import path from 'path';
import * as util from '../util';
import {flattenNestedTree} from './index';

export const flattenNestedTree = (tree, obj, prefix) => {
    if (obj === undefined) return flattenNestedTree(tree, {}, "");

    Object.keys(tree).forEach(function(dir) {
        const path = path.join(prefix, dir);
        if (util.isString(tree[dir])) {
            obj[path] = tree[dir];
        } else {
            flattenNestedTree(tree[dir], obj, path);
        }
    });

    return obj;
};
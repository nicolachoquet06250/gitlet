import * as util from '../util/index.js';
import * as objects from '../objects/index.js';

export const writeTree = tree => {
    const treeObject = Object.keys(tree).map(key => {
        if (util.isString(tree[key])) {
            return `blob ${tree[key]} ${key}`;
        }

        return `tree ${writeTree(tree[key])} ${key}`;
    }).join('\n') + '\n';

    return objects.write(treeObject);
};
import * as util from '../util';
import * as objects from '../objects';

export const writeTree = tree => {
    const treeObject = Object.keys(tree).map(key => {
        if (util.isString(tree[key])) {
            return `blob ${tree[key]} ${key}`;
        }

        return `tree ${writeTree(tree[key])} ${key}`;
    }).join('\n') + '\n';

    return objects.write(treeObject);
};
import * as objects from '../objects';
import * as util from '../util';

export const fileTree = (treeHash, tree) => {
    if (tree === undefined) return fileTree(treeHash, {});

    util.lines(objects.read(treeHash)).forEach(line => {
        const lineTokens = line.split(/ /);

        tree[lineTokens[2]] = lineTokens[0] === 'tree' ? fileTree(lineTokens[1], {}) : lineTokens[1];
    });

    return tree;
};
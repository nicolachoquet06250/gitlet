import * as objects from '../objects/index.js';
import * as files from '../files/index.js';
import * as index from '../index/index.js';

export const write_tree = () => {
    files.assertInRepo();

    return objects.writeTree(files.nestFlatTree(index.toc()));
};
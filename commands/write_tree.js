import * as objects from '../objects';
import * as files from '../files';
import * as index from '../index';

export const write_tree = () => {
    files.assertInRepo();

    return objects.writeTree(files.nestFlatTree(index.toc()));
};
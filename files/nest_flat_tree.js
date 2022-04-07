import path from 'path';
import * as util from '../util';

export const nestFlatTree = obj => Object.keys(obj)
    .reduce((tree, wholePath) =>
        util.setIn(tree, wholePath.split(path.sep).concat(obj[wholePath])), {});
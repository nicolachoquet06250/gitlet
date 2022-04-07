import * as config from '../config';
import * as files from '../files';

export const init = (options = {}) => {
    if (files.inRepo()) return;

    const gitletStructure = {
        HEAD: 'ref: refs/heads/master\n',

        config: config.objToStr({ core: { "": { bare: options.bare === true } } }),
        objects: {},
        refs: {
            heads: {}
        }
    };

    files.writeFilesFromTree(options.bare ? gitletStructure: { ".gitlet": gitletStructure });
    process.cwd();
};
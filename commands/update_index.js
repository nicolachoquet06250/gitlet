import fs from 'fs';
import * as config from '../config/index.js';
import * as files from '../files/index.js';
import * as index from '../index/index.js';

export const update_index = (path, options = {}) => {
    files.assertInRepo();
    config.assertNotBare();

    const pathFromRoot = files.pathFromRepoRoot(path);
    const isOnDisk = fs.existsSync(path);
    const isInIndex = index.hasFile(path, 0);

    if (isOnDisk && fs.statSync(path).isDirectory()) {
        throw new Error(pathFromRoot + " is a directory - add files inside\n");
    } else if (options.remove && !isOnDisk && isInIndex) {
        if (index.isFileInConflict(path)) {
            throw new Error("unsupported");
        }

        index.writeRm(path);
        return '\n';
    } else if (options.remove && !isOnDisk && !isInIndex) {
        return "\n";
    } else if (!options.add && isOnDisk && !isInIndex) {
        throw new Error("cannot add " + pathFromRoot + " to index - use --add option\n");
    } else if (isOnDisk && (options.add || isInIndex)) {
        index.writeNonConflict(path, files.read(files.workingCopyPath(path)));
        return "\n";
    } else if (!options.remove && !isOnDisk) {
        throw new Error(pathFromRoot + " does not exist and --remove not passed\n");
    }
};
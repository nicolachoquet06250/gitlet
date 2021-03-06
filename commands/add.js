import { update_index } from './index.js';
import * as config from '../config/index.js';
import * as files from '../files/index.js';

export const add = (path, _) => {
    files.assertInRepo();
    config.assertNotBare();

    const addedFiles = files.lsRecursive(path);

    if (addedFiles.length === 0) {
        throw new Error(files.pathFromRepoRoot(path) + ' did not match any files');
    }

    for (const p of addedFiles) {
        update_index(p, { add: true });
    }
};
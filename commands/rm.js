import fs from 'fs';
import { update_index } from './index';
import * as config from '../config';
import * as util from '../util';
import * as files from '../files';
import * as index from '../index';
import * as diff from '../diff';

export const rm = (path, options = {}) => {
    files.assertInRepo();
    config.assertNotBare();

    const filesToRm = index.matchingFiles(path);

    if (options.f) {
        throw new Error("unsupported");
    }

    if (filesToRm.length === 0) {
        throw new Error(files.pathFromRepoRoot(path) + ' did not match any files');
    }

    const changesToRm = util.intersection(diff.addedOrModifiedFiles(), filesToRm);

    if (changesToRm.length > 0) {
        throw new Error('these files have changes: \n' + changesToRm.join('\n') + '\n')
    }

    filesToRm.map(files.workingCopyPath).filter(fs.existsSync).forEach(fs.unlinkSync);
    filesToRm.forEach(p => update_index(p, { remove: true }));
};
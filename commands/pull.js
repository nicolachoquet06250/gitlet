import { fetch, merge } from './index.js';
import * as config from '../config/index.js';
import * as files from '../files/index.js';

export const pull = (remote, branch, _) => {
    files.assertInRepo();
    config.assertNotBare();

    fetch(remote, branch);
    return merge('FETCH_HEAD');
};
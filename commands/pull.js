import { fetch, merge } from './index';
import * as config from '../config';
import * as files from '../files';

export const pull = (remote, branch, _) => {
    files.assertInRepo();
    config.assertNotBare();

    fetch(remote, branch);
    return merge('FETCH_HEAD');
};
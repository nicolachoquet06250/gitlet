import * as config from '../config/index.js';
import * as files from '../files/index.js';
import * as _status from '../status/index.js';

export const status = _ => {
    files.assertInRepo();
    config.assertNotBare();
    
    return _status.toString();
};
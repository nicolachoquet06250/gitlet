import * as config from '../config';
import * as files from '../files';
import * as _status from '../status';

export const status = _ => {
    files.assertInRepo();
    config.assertNotBare();
    
    return _status.toString();
};
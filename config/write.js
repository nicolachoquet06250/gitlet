import {objToStr} from './index';
import * as files from '../files';

export const write = configObj => {
    files.write(files.gitletPath("config"), objToStr(configObj));
};
import {objToStr} from './index.js';
import * as files from '../files/index.js';

export const write = configObj => {
    files.write(files.gitletPath("config"), objToStr(configObj));
};
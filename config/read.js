import * as config from '../config/index.js';
import * as files from '../files/index.js';

export const read = () => config.strToObj(files.read(files.gitletPath("config")));
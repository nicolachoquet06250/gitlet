import * as config from '../config';
import * as files from '../files';

export const read = () => config.strToObj(files.read(files.gitletPath("config")));
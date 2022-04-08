import nodePath from 'path';
import {gitletPath} from './index.js';

export const workingCopyPath = path =>  nodePath.join(nodePath.join(gitletPath(), ".."), path || "");
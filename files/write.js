import os from 'os';
import nodePath from 'path';
import * as util from '../util/index.js';
import {writeFilesFromTree} from './index.js';

export const write = (path, content) => {
    const prefix = os.platform() === "win32" ? "." : "/";
    writeFilesFromTree(util.setIn({}, path.split(nodePath.sep).concat(content)), prefix);
};
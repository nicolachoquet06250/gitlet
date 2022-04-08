import path from 'path';
import {isRef} from "./index.js";
import * as files from '../files/index.js';

export const write = (ref, content) => {
    if (isRef(ref)) {
        files.write(files.gitletPath(path.normalize(ref)), content);
    }
};
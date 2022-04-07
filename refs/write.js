import path from 'path';
import {isRef} from "./index";
import * as files from '../files';

export const write = (ref, content) => {
    if (isRef(ref)) {
        files.write(files.gitletPath(path.normalize(ref)), content);
    }
};
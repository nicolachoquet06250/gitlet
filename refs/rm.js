import fs from 'fs';
import {isRef} from "./index.js";
import * as files from '../files/index.js';

export const rm = ref => {
    if (isRef(ref)) {
        fs.unlinkSync(files.gitletPath(ref));
    }
};
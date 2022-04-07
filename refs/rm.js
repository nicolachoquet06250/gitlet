import fs from 'fs';
import {isRef} from "./index";
import * as files from '../files';

export const rm = ref => {
    if (isRef(ref)) {
        fs.unlinkSync(files.gitletPath(ref));
    }
};
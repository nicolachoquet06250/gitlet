import fs from 'fs';
import {isRef} from "./index";
import * as files from '../files';

export const exists = ref => isRef(ref) && fs.existsSync(files.gitletPath(ref));
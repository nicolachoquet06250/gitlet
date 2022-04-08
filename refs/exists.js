import fs from 'fs';
import {isRef} from "./index.js";
import * as files from '../files/index.js';

export const exists = ref => isRef(ref) && fs.existsSync(files.gitletPath(ref));
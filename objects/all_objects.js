import fs from 'fs';
import {read} from "./index.js";
import * as files from '../files/index.js';

export const allObjects = () => fs.readdirSync(files.gitletPath('objects')).map(read);
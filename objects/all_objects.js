import fs from 'fs';
import {read} from "./index";
import * as files from '../files';

export const allObjects = () => fs.readdirSync(files.gitletPath('objects')).map(read);
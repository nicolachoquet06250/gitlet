import fs from 'fs';
import path from 'path';
import * as files from '../files';

export const exists = objectHash => objectHash !== undefined &&
    fs.existsSync(path.join(files.gitletPath(), 'objects', objectHash));
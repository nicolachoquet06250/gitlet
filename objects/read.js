import path from 'path';
import fs from 'fs';
import * as files from '../files/index.js';

export const read = objectHash => {
    if (objectHash !== undefined) {
        const objectPath = path.join(files.gitletPath(), 'objects', objectHash);
        if (fs.existsSync(objectPath)) return files.read(objectPath);
    }
};
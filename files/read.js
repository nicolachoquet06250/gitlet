import fs from 'fs';

export const read = path => {
    if (fs.existsSync(path)) {
        return fs.readFileSync(path, "utf8");
    }
};
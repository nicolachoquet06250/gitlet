import fs from 'fs';
import nodePath from 'path';
import {read} from './index.js';

function gitletDir(dir) {
    if (fs.existsSync(dir)) {
        const potentialConfigFile = nodePath.join(dir, "config");
        const potentialGitletPath = nodePath.join(dir, ".gitlet");

        if (fs.existsSync(potentialConfigFile) &&
            fs.statSync(potentialConfigFile).isFile() &&
            read(potentialConfigFile).match(/\[core\]/)) {
            return dir;
        } else if (fs.existsSync(potentialGitletPath)) {
            return potentialGitletPath;
        } else if (dir !== "/") {
            return gitletDir(nodePath.join(dir, ".."));
        }
    }
}

export const gitletPath = path => {
    const gDir = gitletDir(process.cwd());
    if (gDir !== undefined) {
        return nodePath.join(gDir, path || "");
    }
};
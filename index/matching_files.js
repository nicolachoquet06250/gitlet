import {toc} from "./index.js";
import * as files from '../files/index.js';

export const matchingFiles = pathSpec => {
    const searchPath = files.pathFromRepoRoot(pathSpec);
    return Object.keys(toc())
        .filter(p => p.match(`^${searchPath.replace(/\\/g, '\\\\')}`));
};
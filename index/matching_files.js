import {toc} from "./index";
import * as files from '../files';

export const matchingFiles = pathSpec => {
    const searchPath = files.pathFromRepoRoot(pathSpec);
    return Object.keys(toc())
        .filter(p => p.match(`^${searchPath.replace(/\\/g, '\\\\')}`));
};
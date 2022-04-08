import {key, read, write} from "./index.js";
import * as objects from '../objects/index.js';

export const _writeStageEntry = (path, stage, content) => {
    const idx = read();
    idx[key(path, stage)] = objects.write(content);
    write(idx);
};
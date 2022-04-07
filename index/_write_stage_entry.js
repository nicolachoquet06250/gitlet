import {key, read, write} from "./index";
import * as objects from '../objects';

export const _writeStageEntry = (path, stage, content) => {
    const idx = read();
    idx[key(path, stage)] = objects.write(content);
    write(idx);
};
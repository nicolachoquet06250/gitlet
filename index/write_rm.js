import {key, read, write} from "./index";

export const writeRm = path => {
    const idx = read();
    [0, 1, 2, 3].forEach(stage => delete idx[key(path, stage)]);
    write(idx);
};
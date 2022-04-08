import {hasFile} from "./index.js";

export const isFileInConflict = path => hasFile(path, 2);
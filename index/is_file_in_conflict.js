import {hasFile} from "./index";

export const isFileInConflict = path => hasFile(path, 2);
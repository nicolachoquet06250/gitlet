import { read, key } from './index.js';

export const hasFile = (path, stage) => read()[key(path, stage)] !== undefined;
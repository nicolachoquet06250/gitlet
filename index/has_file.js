import { read, key } from './index';

export const hasFile = (path, stage) => read()[key(path, stage)] !== undefined;
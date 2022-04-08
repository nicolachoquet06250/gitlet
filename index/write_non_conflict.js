import { writeRm, _writeStageEntry } from './index.js';

export const writeNonConflict = (path, content) => {
    writeRm(path);

    _writeStageEntry(path, 0, content);
};
import {_writeStageEntry} from "./index";

export const writeConflict = (path, receiverContent, giverContent, baseContent) => {
    if (baseContent !== undefined) {
        _writeStageEntry(path, 1, baseContent);
    }
    _writeStageEntry(path, 2, receiverContent);
    _writeStageEntry(path, 3, giverContent);
};
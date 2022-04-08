import {FILE_STATUS, nameStatus, tocDiff} from "./index.js";
import * as refs from '../refs/index.js';
import * as objects from '../objects/index.js';
import * as index from '../index/index.js';

export const addedOrModifiedFiles = () => {
    const headToc = refs.hash('HEAD') ? objects.commitToc(refs.hash('HEAD')) : {};
    const wc = nameStatus(tocDiff(headToc, index.workingCopyToc()));

    return Object.keys(wc).filter(p => wc[p] !== FILE_STATUS.DELETE);
};
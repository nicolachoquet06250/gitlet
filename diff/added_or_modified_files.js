import {FILE_STATUS, nameStatus, tocDiff} from "./index";
import * as refs from '../refs';
import * as objects from '../objects';
import * as index from '../index';

export const addedOrModifiedFiles = () => {
    const headToc = refs.hash('HEAD') ? objects.commitToc(refs.hash('HEAD')) : {};
    const wc = nameStatus(tocDiff(headToc, index.workingCopyToc()));

    return Object.keys(wc).filter(p => wc[p] !== FILE_STATUS.DELETE);
};
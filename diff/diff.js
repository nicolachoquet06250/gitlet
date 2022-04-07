import {tocDiff} from './index';
import * as index from "../index";
import * as objects from '../objects';

export const diff = (hash1, hash2) => {
    const a = hash1 === undefined ? index.toc() : objects.commitToc(hash1);
    const b = hash2 === undefined ? index.workingCopyToc() : objects.commitToc(hash2);

    return tocDiff(a, b);
};
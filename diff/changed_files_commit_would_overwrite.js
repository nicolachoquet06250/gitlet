import * as refs from '../refs/index.js';
import {nameStatus, diff} from "./index.js";
import * as util from '../util/index.js';

export const changedFilesCommitWouldOverwrite = hash => {
    const headHash = refs.hash('HEAD');

    return util.intersection(
        Object.keys(nameStatus(diff(headHash))),
        Object.keys(nameStatus(diff(headHash, hash)))
    );
};
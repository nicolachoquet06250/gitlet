import * as refs from '../refs';
import {nameStatus, diff} from "./index";
import * as util from '../util';

export const changedFilesCommitWouldOverwrite = hash => {
    const headHash = refs.hash('HEAD');

    return util.intersection(
        Object.keys(nameStatus(diff(headHash))),
        Object.keys(nameStatus(diff(headHash, hash)))
    );
};
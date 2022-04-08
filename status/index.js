import fs from 'fs';
import * as index from '../index/index.js';
import * as files from '../files/index.js';
import * as objects from '../objects/index.js';
import * as diff from '../diff/index.js';
import * as refs from '../refs/index.js';
import * as util from '../util/index.js';

const untracked = () => fs.readdirSync(files.workingCopyPath())
    .filter(p => index.toc()[p] === undefined && p !== ".gitlet");

function toBeCommitted() {
    const headHash = refs.hash("HEAD");
    const headToc = headHash === undefined ? {} : objects.commitToc(headHash);
    const ns = diff.nameStatus(diff.tocDiff(headToc, index.toc()));

    return Object.keys(ns).map(p => ns[p] + " " + p);
}

function notStagedForCommit() {
    const ns = diff.nameStatus(diff.diff());
    return Object.keys(ns).map(p => ns[p] + " " + p);
}

const listing = (heading, lines) => lines.length > 0 ? [heading, lines] : [];

export const toString = () => util.flatten(["On branch " + refs.headBranchName(),
    listing("Untracked files:", untracked()),
    listing("Unmerged paths:", index.conflictedPaths()),
    listing("Changes to be committed:", toBeCommitted()),
    listing("Changes not staged for commit:", notStagedForCommit())])
    .join("\n");
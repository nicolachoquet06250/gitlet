import fs from 'fs';
import { update_ref, write_tree } from './index';
import * as refs from '../refs';
import * as merge from '../merge';
import * as config from '../config';
import * as files from '../files';
import * as index from '../index';
import * as objects from '../objects';

export const commit = (options = {}) => {
    files.assertInRepo();
    config.assertNotBare();

    const treeHash = write_tree();
    const headDesc = refs.isHeadDetached() ? "detached Head" : refs.headBranchName();

    if (refs.hash("HEAD") !== undefined && treeHash === objects.treeHash(objects.read(refs.hash("HEAD")))) {
        throw new Error("# On " + headDesc + "\nnothing to commit, working directory clean");
    }

    const conflictedPaths = index.conflictedPaths();
    if (merge.isMergeInProgress() && conflictedPaths.length > 0) {
        throw new Error(conflictedPaths.map(p => "U" + p).join('\n') + '\ncannot commit because you have unmerged files\n');
    }

    const m = merge.isMergeInProgress() ? files.read(files.gitletPath("MERGE_MSG")) : options.m;

    const commitHash = objects.writeCommit(treeHash, m, refs.commitParentHashes());

    update_ref("HEAD", commitHash);

    if (merge.isMergeInProgress()) {
        fs.unlinkSync(files.gitletPath("MERGE_MSG"));
        refs.rm("MERGE_MSG");
        return "Merge made by the three-way strategy";
    }

    return `[${headDesc} ${commitHash}] ${m}`;
};
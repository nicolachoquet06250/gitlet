import * as refs from '../refs/index.js';

export const isMergeInProgress = () => refs.hash("MERGE_HEAD");
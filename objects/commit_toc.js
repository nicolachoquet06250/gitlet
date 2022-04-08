import {fileTree, read, treeHash} from "./index.js";
import * as files from '../files/index.js';

export const commitToc = hash => files.flattenNestedTree(fileTree(treeHash(read(hash))));
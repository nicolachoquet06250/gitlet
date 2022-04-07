import {fileTree, read, treeHash} from "./index";
import * as files from '../files';

export const commitToc = hash => files.flattenNestedTree(fileTree(treeHash(read(hash))));
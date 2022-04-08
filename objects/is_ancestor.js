import {ancestors} from "./index.js";

export const isAncestor = (descendentHash, ancestorHash) => ancestors(descendentHash).indexOf(ancestorHash) !== -1;
import {ancestors} from "./index";

export const isAncestor = (descendentHash, ancestorHash) => ancestors(descendentHash).indexOf(ancestorHash) !== -1;
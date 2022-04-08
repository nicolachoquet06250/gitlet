import * as index from '../index/index.js';
import * as objects from '../objects/index.js';
import {FILE_STATUS} from "../diff/index.js";
import {mergeDiff} from "./index.js";

export const writeIndex = (receiverHash, giverHash) => {
    const mergeDiff = mergeDiff(receiverHash, giverHash);
    index.write({});

    Object.keys(mergeDiff).forEach(function(p) {
        if (mergeDiff[p].status === FILE_STATUS.CONFLICT) {
            index.writeConflict(p,
                objects.read(mergeDiff[p].receiver),
                objects.read(mergeDiff[p].giver),
                objects.read(mergeDiff[p].base));
        } else if (mergeDiff[p].status === FILE_STATUS.MODIFY) {
            index.writeNonConflict(p, objects.read(mergeDiff[p].giver));
        } else if (mergeDiff[p].status === FILE_STATUS.ADD ||
            mergeDiff[p].status === FILE_STATUS.SAME) {
            const content = objects.read(mergeDiff[p].receiver || mergeDiff[p].giver);
            index.writeNonConflict(p, content);
        }
    });
}
import {FILE_STATUS} from "./index.js";
import * as util from '../util/index.js';

function fileStatus(receiver, giver, base) {
    const receiverPresent = receiver !== undefined;
    const basePresent = base !== undefined;
    const giverPresent = giver !== undefined;

    if (receiverPresent && giverPresent && receiver !== giver) {
        return receiver !== base && giver !== base ? FILE_STATUS.CONFLICT : FILE_STATUS.MODIFY;
    } else if (receiver === giver) {
        return FILE_STATUS.SAME;
    } else if ((!receiverPresent && !basePresent && giverPresent) ||
        (receiverPresent && !basePresent && !giverPresent)) {
        return FILE_STATUS.ADD;
    } else if ((receiverPresent && basePresent && !giverPresent) ||
        (!receiverPresent && basePresent && giverPresent)) {
        return FILE_STATUS.DELETE;
    }
}

export const tocDiff = (receiver, giver, base = receiver) => {
    const paths = Object.keys(receiver).concat(Object.keys(base)).concat(Object.keys(giver));

    return util.unique(paths).reduce((idx, p) => util.setIn(idx, [p, {
        status: fileStatus(receiver[p], giver[p], base[p]),
        receiver: receiver[p],
        base: base[p],
        giver: giver[p]
    }]), {});
};
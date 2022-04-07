import {hash, isRef, terminalRef, write} from '../refs';
import * as objects from "../objects";
import * as files from '../files';
import * as refs from '../refs';

export const update_ref = (refToUpdate, refToUpdateTo, _) => {
    files.assertInRepo();

    const hash = hash(refToUpdateTo);

    if (!objects.exists(hash)) {
        throw new Error(refToUpdateTo + " not a valid SHA1");
    } else if (!isRef(refToUpdate)) {
        throw new Error("cannot lock the ref " + refToUpdate);
    } else if (objects.type(objects.read(hash)) !== "commit") {
        const branch = terminalRef(refToUpdate);
        throw new Error(branch + " cannot refer to non-commit object " + hash + "\n");
    }

    write(refs.terminalRef(refToUpdate), hash);
};
import * as refs from '../refs/index.js';
import * as objects from "../objects/index.js";
import * as workingCopy from "../workingCopy/index.js";
import * as config from '../config/index.js';
import * as files from '../files/index.js';

export const checkout = (ref, _) => {
    files.assertInRepo();
    config.assertNotBare();

    const toHash = hash(ref);

    if (!refs.exists(toHash)) {
        throw new Error(ref + ' did not match any file(s) known to Gitlet');
    } else if (objects.type(objects.read(toHash)) !== "commit") {
        throw new Error('reference is not a tree: ' + ref);
    } else if (ref === refs.headBranchName() || ref === files.read(files.gitletPath("HEAD"))) {
        return "Already on " + ref;
    } else {
        process.chdir(files.workingCopyPath());

        const isDetachingHead = objects.exists(ref);

        workingCopy.write(diff.diff(refs.hash("HEAD"), toHash));

        write("HEAD", isDetachingHead ? toHash : "ref: " + refs.toLocalRef(ref));

        index.write(index.tocToIndex(objects.commitToc(toHash)));

        return isDetachingHead ? "Note: checking out " + toHash + "\nYou are in detached HEAD state." : "Switched to branch " + ref;
    }
};
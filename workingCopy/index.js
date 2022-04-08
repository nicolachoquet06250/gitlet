import fs from 'fs';
import * as objects from '../objects/index.js';
import * as files from '../files/index.js';
import * as diff from '../diff/index.js';

function composeConflict(receiverFileHash, giverFileHash) {
    return "<<<<<<\n" + objects.read(receiverFileHash) +
        "\n======\n" + objects.read(giverFileHash) +
        "\n>>>>>>\n";
}

export const write = dif => {
    Object.keys(dif).forEach(function(p) {
        if (dif[p].status === diff.FILE_STATUS.ADD) {
            files.write(files.workingCopyPath(p), objects.read(dif[p].receiver || dif[p].giver));
        } else if (dif[p].status === diff.FILE_STATUS.CONFLICT) {
            files.write(files.workingCopyPath(p), composeConflict(dif[p].receiver, dif[p].giver));
        } else if (dif[p].status === diff.FILE_STATUS.MODIFY) {
            files.write(files.workingCopyPath(p), objects.read(dif[p].giver));
        } else if (dif[p].status === diff.FILE_STATUS.DELETE) {
            fs.unlinkSync(files.workingCopyPath(p));
        }
    });

    fs.readdirSync(files.workingCopyPath())
        .filter(function(n) { return n !== ".gitlet"; })
        .forEach(files.rmEmptyDirs);
};
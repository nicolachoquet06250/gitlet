import * as util from '../util';
import * as files from '../files';

export const fetchHeadBranchToMerge = branchName => util.lines(files.read(files.gitletPath('FETCH_HEAD')))
    .filter(l => l.match(`^.+ branch ${branchName} of`))
    .map(l => l.match(`^([^ ]+) `)[1])[0];
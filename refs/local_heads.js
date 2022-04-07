import fs from 'fs';
import path from 'path';
import {hash} from "./index";
import * as util from '../util';
import * as files from '../files';

export const localHeads = () => fs.readdirSync(path.join(files.gitletPath(), 'refs', 'heads'))
    .reduce((o, n) => util.setIn(o, [n, hash(n)]), {});
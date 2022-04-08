import fs from 'fs';
import path from 'path';
import {hash} from "./index.js";
import * as util from '../util/index.js';
import * as files from '../files/index.js';

export const localHeads = () => fs.readdirSync(path.join(files.gitletPath(), 'refs', 'heads'))
    .reduce((o, n) => util.setIn(o, [n, hash(n)]), {});
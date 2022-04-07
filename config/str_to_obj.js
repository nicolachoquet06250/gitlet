import * as util from '../util';

export const strToObj = str => str.split("[")
    .map(item => item.trim())
    .filter(item => item !== "")
    .reduce((c, item) => {
        const lines = item.split("\n");
        const entry = [];

        entry.push(lines[0].match(/([^ \]]+)( |\])/)[1]);

        const subsectionMatch = lines[0].match(/\"(.+)\"/);
        const subsection = subsectionMatch === null ? "" : subsectionMatch[1];
        entry.push(subsection);

        entry.push(lines.slice(1).reduce((s, l) => {
            s[l.split("=")[0].trim()] = l.split("=")[1].trim();
            return s;
        }, {}));

        return util.setIn(c, entry);
    }, { "remote": {} });
import * as gitlet from '../commands';

export const runCli = argv => {
    const opts = parseOptions(argv);
    const commandName = opts._[2];

    if (commandName === undefined) {
        throw new Error("you must specify a Gitlet command to run");
    } else {
        const commandFnName = commandName.replace(/-/g, "_");
        /**
         * @const {(...args) => any} fn
         */
        const fn = gitlet[commandFnName];

        if (fn === undefined) {
            throw new Error("'" + commandFnName + "' is not a Gitlet command");
        } else {
            const commandArgs = opts._.slice(3);
            while (commandArgs.length < fn.length - 1) {
                commandArgs.push(undefined);
            }

            return fn.apply(gitlet, commandArgs.concat(opts));
        }
    }
};
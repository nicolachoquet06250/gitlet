export const onRemote = remotePath => fn => {
    const originalDir = process.cwd();
    process.chdir(remotePath);
    const result = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    process.chdir(originalDir);

    return result;
};
export const keyPieces = key => {
    const pieces = key.split(/,/);
    return { path: pieces[0], stage: parseInt(pieces[1]) };
};
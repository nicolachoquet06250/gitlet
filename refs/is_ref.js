export const isRef = ref => ref !== undefined && 
    (ref.match("^refs/heads/[A-Za-z-]+$") || 
    ref.match("^refs/remots/[A-Za-z-]+/[A-Za-z-]+$") ||
    ['HEAD', 'FETCH_HEAD', 'MERGE_HEAD'].indexOf(ref) !== -1);
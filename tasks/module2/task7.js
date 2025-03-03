function simplifyPath(path) {
  const stack = [];
  const parts = path.split('/');

  for (let part of parts) {
    if (part === '.' || part === '') {
      continue;
    } else if (part === '..') {
      stack.pop();
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
}
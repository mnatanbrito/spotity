const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['yarn test:unit']),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};

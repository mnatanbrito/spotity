const tasks = arr => arr.join(' && ');

module.exports = {
  header: 'Spotity Changelog',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chores' },
    { type: 'docs', section: 'Docs' },
    { type: 'style', hidden: true },
    { type: 'refactor', hidden: 'Refactor' },
    { type: 'perf', hidden: true },
    { type: 'test', hidden: true },
  ],
  scripts: {
    postbump: tasks([
      'echo "Updating react native versions"',
      'react-native-version --never-amend',
    ]),
    precommit: tasks(['git add --all']),
  },
};

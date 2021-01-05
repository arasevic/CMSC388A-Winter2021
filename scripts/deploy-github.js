const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:arasevic/CMSC388A-Winter2021.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
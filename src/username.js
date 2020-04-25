const username = require('username');
const os = require('os');


async function getUserNameAsync(){
  const name = await username();
  console.log(name);
}

getUserNameAsync();

console.log('os userInfo is',os.userInfo());
console.log('process env', process.argv);


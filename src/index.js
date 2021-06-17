const axios = require('axios')

const PI = 3.141516;

const greet = name => 'hello' + name;

const users = async () => {
  // get data form API
  const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3')
  return res.data

}

// users().then( 
//   res => console.log("data", res)
// )
module.exports = {
  users,
  greet,
  PI
}
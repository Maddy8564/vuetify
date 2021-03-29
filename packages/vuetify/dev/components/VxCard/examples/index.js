const files = require.context('./', true, /\.js$/i)

export default files.keys().reduce((array, key) => {
  if (key !== './index.js') {
    array.push(files(key).default)
  }
  return array
}, [])

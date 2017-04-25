module.exports = {
  //exported to a file

  //define entry point
  entry:[
    './src/index.jsx'
  ],
  output:{
    filename:"./bundle.js"
  },
  module:{
    loaders:[{
      exclude: /node_modues/,
      loader:'babel-loader'
    }]
  }
}

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css/,
        loader: "emit-file-loader",
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css/,
        loader: "babel-loader!raw-loader"
      }
    )
    // console.log(config.module.rules)
    return config
  }
}

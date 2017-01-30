module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      { test: /\.css/, loader: "babel-loader" }
    )
    return config
  }
}

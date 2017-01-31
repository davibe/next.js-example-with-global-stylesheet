module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      { test: /\.css/, loader: "raw-loader" }
    )
    return config
  }
}

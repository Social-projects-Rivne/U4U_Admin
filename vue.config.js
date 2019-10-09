module.exports = {
    devServer: {
        port: 8081
    },
    runtimeCompiler: false,
    configureWebpack: {
        mode: "development",
        devtool: 'source-map'
    }
}

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: { filename: "bundle.js" },
    resolve: { extensions: [".ts", ".js"] },
    module: {
        rules: [
            { test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: "./assets",
        port: 4500
    }
};
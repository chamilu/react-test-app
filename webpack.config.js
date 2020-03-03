// If we export as a function, we have access to env variable which contains package json data.

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = env => ({
    entry: { main: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [new CleanWebpackPlugin()]
});

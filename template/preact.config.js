module.exports = (config, helpers) => {
    config.module.loaders.push({
        test: /\.tsx?$/,
        use: 'ts-loader'
    });
};
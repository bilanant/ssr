module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/, //run babel only for js files
                loader: 'babel-loader', // this is the actual webpack loader module that executes babel & transpiles our code
                exclude: /node_modules/, // Don't run babel on files under node_modules directory
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}
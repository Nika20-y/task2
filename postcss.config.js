module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
    ]
}
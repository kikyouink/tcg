const path = require('path')
module.exports = {
    baseUrl: './',
    outputDir: '../tcg-app/www',
    filenameHashing: false,
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './public/scss/mixin.scss'),
            ],
        })
}
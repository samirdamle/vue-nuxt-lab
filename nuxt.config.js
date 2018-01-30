module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'lab',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'lab'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        { src: '~assets/scss/main.scss', lang: 'scss' },
        { src: '~assets/fonts/fontawesome-pro-5.0.6/web-fonts-with-css/scss/fa-light.scss', lang: 'scss' },
        { src: '~assets/fonts/fontawesome-pro-5.0.6/web-fonts-with-css/scss/fa-solid.scss', lang: 'scss' },
        { src: '~assets/fonts/fontawesome-pro-5.0.6/web-fonts-with-css/scss/fontawesome.scss', lang: 'scss' },
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/app/allcategoriesinfo/',
            {
                taget: 'http://localhost:8045',
                changeOrigin: true
            }
        )
    )
}
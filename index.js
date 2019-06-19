let path = require('path')
let express = require('express')
let app = express()

/*为app添加中间件处理跨域请求*/
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //项目上线后改成页面的地址
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // console.log(res)
    next();
})

//分发api
app.use('/api', require('./api/index.js'))

//设置路由配置
app.get('/', function (req, res) {
    res.send('welcome to my mock-server')
})

let server = app.listen(8888, function () {
    console.log('app listening at http://localhost:8888')
})
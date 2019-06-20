let express = require('express')
let Mock = require('mockjs')
let router = express.Router()


// let template = require('./template.js')

//router.get router.post 
router.all('/get', function (req, res) {
    res.json(Mock.mock({
        "status": true,
        "msg": "succsess",
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }))
})

router.all('/table/getTree', function (req, res) {
    res.json(Mock.mock({
        "status": true,
        "msg": "succsess",
        "data": [{
            id: '1',
            title: '湖北',
            expand: true,
            children: [{
                    id: '11',
                    title: '武汉',
                    expand: true,
                    children: [{
                            id: '111',
                            title: '洪山区'
                        },
                        {
                            id: '112',
                            title: '青山区'
                        }
                    ]
                },
                {
                    id: '12',
                    title: '黄石',
                    expand: true,
                    children: [{
                            id: '121',
                            title: '西塞山'
                        },
                        {
                            id: '122',
                            title: '下陆区'
                        }
                    ]
                }
            ]
        }]
    }))
})


router.all('/post', function (req, res) {
    res.json(Mock.mock({
        "status": false,
        "msg": "接口错误",
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "cnname": '@cname', //中文名称
            'birthday': '@date("yyyy-MM-dd")', // 日期
            'city': '@city(true)', // 中国城市
            'color': '@color', // 16进制颜色
            "id|+1": 1,
            "value|0-500": 20
        }]
    }))
})

module.exports = router
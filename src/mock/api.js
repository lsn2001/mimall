import Mock from 'mockjs'
Mock.mock('/api/user/login',
    {
        "status": 0,
        "data": {
            "id": 12,
            "username": "@cname",
            "email": "admin@51purse.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updataTime": 1479048325000
        }
    });
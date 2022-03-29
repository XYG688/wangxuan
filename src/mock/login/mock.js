let Mock = require('mockjs');
Mock.mock("/api/login", "post", (config) => {
    let arr = config.body
    arr = JSON.parse(arr);
    let user = arr.user;
    let pass = arr.pass;
    if (user === "admin" && pass === "123456") {
        return {
            message: "success",
            data: {
                user,
                pass,
                token: "123456",
            }
        }
    } else {
        return {
            message: "fail",
            data: {
                message: "用户名或密码错误"
            }
        }
    }
})
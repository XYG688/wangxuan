let Mock = require('mockjs');
let articleData = [{
        id: 0,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    }, {
        id: 1,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    },
    {
        id: 2,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    }, {
        id: 3,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    }, {
        id: 4,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    }, {
        id: 5,
        title: "文章以什么开始什么结尾",
        num: 46579,
        writer: "吴懈可击",
        answer: 45,
    }
]
Mock.mock("/api/article", articleData)
import Mock from "mockjs";
//创建文章列表数据
const { articleList } = Mock.mock({
    'articleList|50': [
        {
            'id': '@increment()',
            'author': '@cword(3,6)',
            'time': '@date(yyyy-mm-dd)',
            'tag': '前端',
            'title': "@ctitle(6,18)",
            "content": "@cparagraph(5,15)",
            "view_number|1-100000": 1,
            "dianzan_number|1-100000": 1,
            "comment_number|1-100000": 1,
            'image|1': ['@image("108x72", "@color", "@color", "png", "示例")', undefined],
        }
    ]
})
//为所有文章
Mock.mock('/api/get/articles', "get", () => {
    return {
        status: 200,
        message: "获取文章列表成功",
        list: articleList,
    };
})

//头部标题
//综合
const { hot_title_list1 } = Mock.mock({
    'hot_title_list1|3': [
        {
            'id': '@increment()',
            'hot_title': '@ctitle(10)'
        }
    ]
})
Mock.mock('/api/get/title1', () => {
    return {
        status: 200,
        message: "获取标题列表成功",
        list: hot_title_list1,
        total: 3
    }
})
//精选
const { hot_title_list2 } = Mock.mock({
    'hot_title_list2|3': [
        {
            'id': '@increment()',
            'hot_title': '@ctitle(10)'
        }
    ]
})
Mock.mock('/api/get/title2', () => {
    return {
        status: 200,
        message: "获取标题列表成功",
        list: hot_title_list2,
        total: 3
    }
})
//推荐
const { hot_title_list3 } = Mock.mock({
    'hot_title_list3|3': [
        {
            'id': '@increment()',
            'hot_title': '@ctitle(10)'
        }
    ]
})
Mock.mock('/api/get/title3', () => {
    return {
        status: 200,
        message: "获取标题列表成功",
        list: hot_title_list3,
        total: 3
    }
})
//广告
const { AdList } = Mock.mock({
    'AdList|1-3': [
        {
            'id': '@increment()',
            'image': '@image("260x120", "@color", "@color", "png", "广告")',
            'url': '@word(10,20)',
            'showClose': false,
            'showPut': false
        }
    ]
})
Mock.mock('/api/get/ad', () => {
    return {
        status: 200,
        message: "获取广告列表成功",
        list: AdList,
    }
})
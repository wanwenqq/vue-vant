import axios from 'axios'

const httpserver = axios.create();
//设置请求超时时间
httpserver.defaults.timeout = 1000 * 10;
// 设置post请求头
httpserver.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// 添加请求拦截
// 可以在请求前做一些工作，比喻在header中加token
httpserver.interceptors.request.use(function (config) {
    if (config.method === 'get' && config.url != undefined) {
        if (config.params == undefined) {
            config.params = {}
        }
        config.params.__preventCache = new Date().getTime()
    }
    // config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
    return config
}, function (error) {
    return Promise.reject(error)
})


httpserver.interceptors.response.use(function (response) {
        // 请求成功
        const code = response.status
        console.log('---------------' + code)
        if (code == 200) {
            return response;
        } else {
            switch (code) {
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                default:
                    Promise.reject(response)
            }
        }
    },
    function (error) {
        console.log(error)
        console.log('请检查网络情况')
        return Promise.reject(response);
    })

const errorHandle = (status, msg) => {
    switch (status) {
        case 401:
            // 未登录
            break;
        case 403:
            // 未授权
            break;
        case 404:
            // 找不到资源
            break;
        default:
            // 其他未处理的问题
            console.log(msg)
    }
}


export default httpserver;
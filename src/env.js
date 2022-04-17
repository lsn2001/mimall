let baseURL;
// 这种获取环境变量的方法 是JSONP和CORS跨域所需要的 如果是代理的话 只需要把baseURL设置成'/api'
// process.env获取当前node.js进程中的环境变量 
// 因为项目是在这node.js服务器下运行起来的 所以可以获取到node.js环境变量的一些参数信息
switch(process.env.NODE_ENV)
{
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}
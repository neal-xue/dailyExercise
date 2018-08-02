module.exports = {
    proxy:{
        '/api':{
            target: 'http://192.168.220.224:9090', //设置调用接口域名和端口号别忘了加http
            changeOrigin: true,  //是否跨域
            pathRewrite:{
              "^/api":""
            }
        },
        '/apis':{
            target: 'http://192.168.220.224:9099', //设置调用接口域名和端口号别忘了加http
            changeOrigin: true,  //是否跨域
            pathRewrite:{
              "^/api":""
            }
        }
    }
}
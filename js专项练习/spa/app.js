//实例化
let monitor = new Monitor({
    onchange:function(event){
        spa.dispatch({
            request: new URL(event.newValue)
        })
    }
})

//中间件抽象
function middleware(context,next){
    //do something
    //do next middleware
    next();
}

spa.add(
    rest({
        matchers:[
            '/user/:id',
            '/group/:gid/users'
        ]
    })
);
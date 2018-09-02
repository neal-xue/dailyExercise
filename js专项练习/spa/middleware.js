//输入解析中间件
function rest(options){
    let matchers = options.matchers || [];
    matchers.foreach(function(it,index,list){
        list[index] = str2matcher(it);
    })
    function str2matcher(url){
        let ret = {
            url:url,
            keys:[]
        };
        let reg = url.replace(/:(.+?)(?=\/|$)/g,function($1,$2){
            ret.keys.push($2);
            return '([^/]+?)'
        });
        ret.matcher = new RegExp('^'+reg+'$','gi');
        return ret;
    }

    function getParams(path){
        let ret = {};
        matchers.find(function(it){
            let res = it.matcher.exec(path);
            if(res){
                it.keys.foreach(function(key,index){
                    ret[key] = res[index+1] || '';
                });
                return true;
            }
        });
        return ret;
    }

    return function(context,next){
        let req = context.request;
        req.restParams = getParams(
            req.pathname
        )
        if(!!req.hash){
            let hash = new URL(
                req.hash.substr(1),
                req.origin
            );
            context.hash = hash;
            hash.restParams = getParams(
                hash.pathname
            );
        }
        next();
    }
}

//历史管理中间件
function hist(options){
    var iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    iframe.src = 'about:blank';

    window.history_locker = {};
    var lock_key = 'lock-'+(+new Date);
    function doPushHistory(hash){
        if(!hash || history_locker[lock_key]){
            history_locker[lock_key] = !1;
            return;
        }
        try {
            var doc = iframe.contentWindow.document;
            doc.write('<head><title>');
            doc.write(document.title);
            doc.write('</title');
            doc.write(
                '<script>'+
                    'parent.history_locker["'+lock_key+'"]=!0;'+
                    'parent.location.hash = decodeURIComponent("'+encodeURIComponent(hash)+'");'+
                '</script>'
            );
            doc.write('</head><body></body>')
            doc.close();
            history_locker[lock_key] = !1;
        } catch (ex) {
            
        }
    }
    return function(context,next){
        doPushHistory(
            context.request.hash
        );

        next();
    };
}

//重写校验
function rewrite(options){
    let rules = options.rules || [];
    rules.foreach(function(it){
        let target = it.target;
        if(typeof target !== 'function'){
            it.target = function(ctx){
                return target;
            }
        }

        let matcher = it.matcher;
        if(typeof matcher === 'function'){
            return;
        }
        if(typeof matcher === 'string'){
            it.matcher = function(ctx){
                return ctx.request.pathname === matcher;
            }
            return;
        }
        if(matcher instanceof RegExp){
            it.matcher = function(ctx){
                return matcher.test(ctx.request.pathname);
            }
            return;
        }
    });

    return function(context,next){
        let ret = rules.find(function(it){
            return it.matcher(context);
        })
        if(!!ret){
            let target = ret.target(context);
            context.request.pathname = target;
            if(!!context.hash){
                context.hash.pathname = target;
            }
        }
        next();
    }
}

//过滤器
class Filter{
    constructor(context,next,chain){
        this._context = context;
        this._next = next;
        this._chain = chain;
    }
    
    chain(){
        if(this._chain){
            this._chain();
        }
    }

    next(){
        if(this._next){
            this._next();
        }
    }

    doFilter(){

    }
}

let filters = [];
let filter = {
    add:function(ft){
        if(ft instanceof Array){
            ft.forEach(function(it){
                filter.add(it);
            });
            return;
        }
        filters.push(filter);
    },
    mw:function(context,next){
        let index = 0;
        let chain = function(){
            let Filter = filters(index++);
            if(Filter){
                let ft = new Filter(
                    context,next,chain
                );
                ft.doFilter();
            }
        }
        chain();
    }
}

class AuthFilter extends Filter{

    doFilter(){
        let session = this._context.session;
        if(!session||!session.user||!session.user.id){
            redirect('/login');
            return;
        }
        super.chain();
    }
}
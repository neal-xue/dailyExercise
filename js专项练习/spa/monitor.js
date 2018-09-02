function Monitor(opt) {
    opt = opt || {};

    let last = null;

    let runRULCheck = function(){
        let url = location.href;
        if(url !== last){
            let event = {
                oldValue: last,
                newValue: url
            };
            last = url;
            if(typeof opt.onchange === 'function'){     
                opt.onchange(event);
            }
        }
    };

    window.setInterval(runRULCheck,500);
}
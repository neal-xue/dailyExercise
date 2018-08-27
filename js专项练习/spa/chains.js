let chains = [];
function approve(req) {
    let index = 0;
    let next = () =>{
        let func = chains[index];
        index++;
        if(!!func){
            return func(req,next);
        }
    }
    next();
}
function def(func){
    chains.push(func);
}
def((req,next)=>{
    if(req.amount<5){
        console.log("主任审批通过")
        return true;
    }else{
        next();
    }
})
def((req,next)=>{
    let amount = req.amount;
    if(amount>5 && amount<10){
        console.log("副董事长审批通过")
        return true;
    }else{
        next();
    }
})
def((req,next)=>{
    let amount = req.amount;
    if(amount>10 && amount<30){
        console.log("董事长审批通过")
        return true;
    }else{
        next();
    }
})
def((req,next)=>{
    let amount = req.amount;
    if(amount>30 && amount<50){
        console.log("董事会审批通过")
        return true;
    }else{
        next();
    }
})
def((req,next)=>{
    let ok = next();
    if(!ok){
        console.error('无人可审批次金额['+req.amount+']采购单');
    }
})
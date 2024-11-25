function querystring(arg){
    let targetObject = {}
    if(arg.length === o){
        return targetObject;
    }
    else if(!["&"].includes(arg)){
        let x = arg.split("=");
        let y = x.reduce((a,b)=>{
            a[b[0]] = b[1]+b[2];
        },{})   
    }
    let STRING_TO_ARRAY = arg.split("&");
    let nestedArray = STRING_TO_ARRAY.map(item => item.split("="));
    return Object.fromEntries(nestedArray);
}
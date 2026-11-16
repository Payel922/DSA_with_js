var balancedStringSplit = function(s){
    let r = 0;
    let l = 0;
    let balanced = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i] == "R"){
            r++;
        }else{
            l++;
        }
        if(r === l){
            balanced++;
            r = 0;
            l = 0;
        }

    }
    return balanced;
}
let s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));

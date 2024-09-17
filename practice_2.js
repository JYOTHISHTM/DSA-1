
function remove(str,seen={}){
    if(str==="") return ""
    const first=seen[str[0]]?"":str[0]
    seen[str[0]]=true
    return first+remove(str.slice(1),seen)
}

console.log(remove("hello"));

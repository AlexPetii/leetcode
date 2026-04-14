/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    for(let p of path.split("/")){
        if(p === "" || p === "."){
            continue
        }
        if(p === ".."){
            if(stack){
            stack.pop()
            }
        }else {
            stack.push(p)
        }
    }return "/" + stack.join("/")
};
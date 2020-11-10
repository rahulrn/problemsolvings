/*
* Problem : find all Sub String 
* 
*/
function getSubstring(str) {
    const subStrings = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            subStrings.push(str.slice(i, j + 1));    
        }
    }
    return subStrings;
}
console.log(getSubstring("abcd"));
console.log(getSubstring("abcd").length);
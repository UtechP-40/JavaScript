function findLongestSubArray(arr, k) {
    let map = new Map();
    let sub = substr(arr)
    sub = sub.sort((a,b)=>b.length-a.length)
    // console.log(sub)
    for (const array of sub) {
        let sum = 0
        for (const val of array) {
            sum+=val
        }
        if(sum==k){
            return array.length
        }
    }
}
function substr(str){
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i,i+2))
        arr.push(str.slice(i))
        for (let j = 0; j < str.length; j++) {
            arr.push(str.slice(i,i+j))
            
        }
    }
    arr= arr.filter((x,i) => arr.indexOf(x) === i)
    return arr
}
let n =6
let k = 15
let arr = [10,5,2,7,1,9]
console.log(findLongestSubArray(arr,k))
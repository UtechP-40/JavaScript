function findPairs(array1, array2, x) {
let map = []
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i]+array2[i]==x) {
            map.push(array1[i],array2[i])
            i++
        }
        
    }
    
}
return map
  }
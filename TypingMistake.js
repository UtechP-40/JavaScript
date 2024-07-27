function convertKeyboardLayout(layout1, layout2, text) {
let map = new Map()
for (let i = 0; i < 26; i++) {
    map.set(layout1[i], layout2[i])
}
let str= text.split("")
for (let i = 0; i < str.length; i++) {
    if(isNaN(str[i])){
        let char = str[i].toLowerCase()
   let value = map.get(char)
   if (str[i]==str[i].toUpperCase()) {
    str[i]=value.toUpperCase()
   }else{
    str[i]=value
   }
}
    
}
str.join("")
}
let layout1="qwertyuiopasdfghjklzxcvbnm"
let layout2 = "veamhjsgqocnrbfxdtwkylupzi"
let text = "FpcpEbb2019"
convertKeyboardLayout(layout1,layout2,text)
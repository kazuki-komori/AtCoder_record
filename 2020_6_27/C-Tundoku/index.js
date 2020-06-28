inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')

let K = Number(inp[0].split(" ")[2])
const timeA = inp[1].split(" ").map(Number)
const timeB = inp[2].split(" ").map(Number)
let timer = 0, i= 0, counter = 0
while(K-timeA[i] >= 0){
    K -= timeA[i]
    i ++
}
console.log(counter)

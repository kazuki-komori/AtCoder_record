const inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const num = Number(inp)
if (num < 1000){
    console.log(1000-num)
} else if (num % 1000 === 0){
    console.log(0)
} else {
    console.log(1000-(num % 1000))
}

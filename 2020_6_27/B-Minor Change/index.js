inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const S = inp.shift()
const T = inp.shift()
let counter = 0
for (let i=0; i<S.length; i++){
    if (S[i] !== T[i]){
        counter++
    }
}
console.log(counter)

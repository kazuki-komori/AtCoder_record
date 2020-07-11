import * as fs from "fs"

const path:string = '/dev/stdin'
export const main = (path) => {
    const inp:string[] = fs.readFileSync(path, 'utf8').trim().split('\n')

    const K: number = Number(inp[0].split(' ')[2])
    inp.shift()
    const H:number = inp.length
    const W:number = inp[0]?.length ?? 0


    // 黒の個数カウント
    const blacks:number[] = []
    for (let i: number = 0; i < H; i++){
        blacks.push((inp[i].match(/#/g) || []).length)
    }
    let black:number = blacks.reduce((a,x) => a + x, 0)
    const diff:number = K - black

    // 何もしなくて良いとき
    if (diff === 0){
        return 1
    }

    //let counter:number = 0
    for (let j:number = 0; j < W; j++){
        let col = inp.map(val => val[j])
        let colBlack:number = col.filter(val => val.match(/#/g)).length
        console.log(colBlack)
        console.log(col)
    }
}
main(path)

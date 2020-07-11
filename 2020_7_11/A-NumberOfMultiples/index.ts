import * as fs from "fs"

const judge = (L:number, R:number, d:number) => {
    let ans:number = 0
    for (let i:number = L; i <= R; i ++){
        if (i % d === 0){
            ans ++
        }
    }
    return ans
}

export const main = () => {
    const inp:string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
    const data:number[] = inp[0].split(' ').map((val:string) => Number(val))


    const L: number = data[0]
    const R: number = data[1]
    const d: number = data[2]
    return  judge(L, R, d)
}

console.log(main())

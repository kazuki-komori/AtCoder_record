import * as fs from "fs"

const judge = (data :number[]) => {
    let ans:number = 0
    for (let i:number = 0; i < data.length; i++){
        if ((i+1) % 2 !== 0){
            if (data[i] % 2 !== 0){
                ans ++
            }
        }
    }
    return ans
}

export const main = () => {
    const inp:string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
    const data:number[] = inp[1].split(' ').map((val:string) => Number(val))

    return  judge(data)
}

console.log(main())

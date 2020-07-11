import * as fs from "fs"

const formula = (x:number, y:number, z:number) => {
    return Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2) + x * y + y * z + z * x
}


const judge = (number :number) => {
    const T: { [key: number]: number | undefined } = {};

    for (let x = 1; x * x <= number; x++) {
        for (let y = 1; y * y <= number; y++) {
            for (let z = 1; z * z <= number; z++) {
                const n:number = formula(x, y, z)
                T[n] = (T[n] || 0) + 1;
            }
        }
    }
    return T
}

export const main = () => {
    const inp:string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
    const data:number[] = inp[0].split(' ').map((val:string) => Number(val))
    const res:{[key: string]: number | undefined} = judge(data[0])
    const ans:number[] = []
    for (let i :number = 1; i <= data[0]; i++){
        ans.push(res[i] || 0)
    }
    return ans
}

console.log(...main())

import * as fs from "fs"
const inp:string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
export const res = (inp) =>{
    interface obj {
        AC: number,
        WA: number,
        TLE: number,
        RE: number
    }

    let obj:obj = {
        AC: 0,
        WA: 0,
        TLE: 0,
        RE: 0
    }
    inp.shift()
    for (let element of inp){
        if (element === 'AC'){
            obj.AC += 1
        } else if (element === 'WA'){
            obj.WA += 1
        } else if (element === 'TLE'){
            obj.TLE += 1
        } else if (element === 'RE'){
            obj.RE += 1
        }
    }
    //console.log(`AC x ${obj.AC}\nWA x ${obj.WA}\nTLE x ${obj.TLE}\nRE x ${obj.RE}`)
    return `AC x ${obj.AC}\nWA x ${obj.WA}\nTLE x ${obj.TLE}\nRE x ${obj.RE}`
}
res(inp)

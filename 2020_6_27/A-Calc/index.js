process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
    //const number = data.split(/[' '\n]/)
    const num = Number(data)
    const res = num + Math.pow(num, 2) + Math.pow(num, 3)
    console.log(res)
})

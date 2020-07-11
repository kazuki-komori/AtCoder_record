import {main} from "./index";
import * as fs from 'fs'


jest.mock('fs', () => ({
    readFileSync:jest.fn(() => 'hoge'),
}));


describe('テストケース', () => {
    jest.mock('fs')

    beforeEach(() => {
        jest.fn().mockClear()
    })


    test('ケース1', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`5 10 2\n`)
        const res:number = main()
        expect(res).toBe(3)
    })

    test('ケース2', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`6 20 7\n`)
        const res:number = main()
        expect(res).toBe(2)
    })

    test('ケース3', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`1 100 1\n`)
        const res:number = main()
        expect(res).toBe(100)
    })
})

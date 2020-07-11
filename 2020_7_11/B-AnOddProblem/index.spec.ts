import {main} from "./index";
import * as fs from 'fs'


jest.mock('fs', () => ({
    readFileSync:jest.fn(() => 'hoge\n fuga'),
}));


describe('テストケース', () => {
    jest.mock('fs')

    beforeEach(() => {
        jest.fn().mockClear()
    })


    test('ケース1', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`5\n1 3 4 5 7\n`)
        const res:number = main()
        expect(res).toBe(2)
    })

    test('ケース2', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`15\n13 76 46 15 50 98 93 77 31 43 84 90 6 24 14\n`)
        const res:number = main()
        expect(res).toBe(3)
    })

})

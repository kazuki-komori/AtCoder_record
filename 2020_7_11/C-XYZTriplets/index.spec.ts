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
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`20\n`)
        const res:number[] = main()
        expect(res).toStrictEqual([0,0,0,0,0,1,0,0,0,0,3,0,0,0,0,0,3,3,0,0])
    })

})

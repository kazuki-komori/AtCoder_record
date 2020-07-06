import {main} from "./index";
import * as fs from 'fs'


jest.mock('fs', () => ({
    readFileSync:jest.fn(() => 'hoge'),
}));


describe('黒マスを数えるテスト', () => {
    jest.mock('fs')
    const inp: string = null

    beforeEach(() => {
        jest.fn().mockClear()
    })


    test('何もしなくて良いとき', async () => {
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(`2 3 4\n..#\n###`)
        const res:number = main(inp)
        expect(res).toBe(1)
    })
})

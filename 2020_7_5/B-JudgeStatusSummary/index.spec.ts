import {res} from "./index";
jest.mock('fs', () => ({
    readFileSync: jest.fn(() => `first¥n second¥n third`),
}));
test('test', () => {
    const input:string[] = ['6', 'AC', 'TLE', 'AC', 'AC', 'WA', 'TLE']
    const expected:string = `AC x 3
WA x 1
TLE x 2
RE x 0`
    const receive:string = res(input)
    console.log(receive)
    expect(expected).toStrictEqual(receive)
})

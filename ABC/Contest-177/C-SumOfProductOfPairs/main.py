from typing import List
import sys


def solution(inp: List) -> int:
    inp = list(map(int, inp))
    ans: int = 0
    inp.pop(0)
    l = len(inp)
    for i in range(l-1):
        for j in range(i+1, l):
            ans += inp[i] * inp[j]
    q, mod = divmod(ans, 1000000007)
    return mod


inp: List = []
for j in sys.stdin:
    inp += j.split()
print(solution(inp))

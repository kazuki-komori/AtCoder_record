from typing import List
import sys


def solution(inp: List) -> int:
    ans: int = 0
    total: int = 0
    N = int(inp[0])
    X = int(inp[1])
    T = int(inp[2])
    while True:
        total += X
        ans += T
        if total >= N:
            break
    return ans


inp: List = []
for j in sys.stdin:
    inp += j.split()
print(solution(inp))

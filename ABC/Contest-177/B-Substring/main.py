from typing import List
import sys


def solution(inp: List) -> int:
    S = inp[0]
    T = inp[1]
    ans = len(T)

    for i in range(len(S) - len(T) + 1):
        a = 0
        for j in range(len(T)):
            if T[j] != S[i + j]:
                a += 1
        ans = min(ans, a)
    return ans


inp: List = []
for j in sys.stdin:
    inp += j.split()
print(solution(inp))

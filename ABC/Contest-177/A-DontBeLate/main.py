from typing import List
import sys


def solution(inp: List) -> str:
    D = int(inp[0])
    T = int(inp[1])
    S = int(inp[2])
    if D/S <= T:
        return "Yes"
    return "No"


inp: List = []
for j in sys.stdin:
    inp += j.split()
print(solution(inp))

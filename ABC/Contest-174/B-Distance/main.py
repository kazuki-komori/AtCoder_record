from typing import List
import sys
import math


def distance(x: int, y: int):
    return math.sqrt(pow(x, 2) + pow(y, 2))


def solution(inp: List) -> int:
    ans: int = 0
    D: int = int(inp[1])
    for i in range(2, len(inp), 2):
        dis = distance(int(inp[i]), int(inp[i + 1]))
        if dis <= D:
            ans += 1
    return ans


inp: List = []
for j in sys.stdin:
    inp += j.split()

print(solution(inp))

from typing import List
import sys


def solution(inp: List) -> int:
    inp.pop(0)
    ans: int = 0
    recent: int = 0
    for n in inp:
        if recent > int(n):
            ans += recent - int(n)
            continue
        recent = int(n)
    return ans


inp: List = []
for j in sys.stdin:
    inp += j.split()
print(solution(inp))

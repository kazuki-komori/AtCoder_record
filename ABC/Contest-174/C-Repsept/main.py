from typing import List
import math


def solution(K: int) -> int:
    ans: int = 0
    x: int = 7
    while True:
        # print(x)
        # print()
        ans += 1
        # K が偶数の時
        if K % 2 == 0:
            return -1
        # x が K より小さい時
        if x < int(K):
            x: int = int(str(x) + str(7))
            continue
        if x % K == 0:
            return ans
        if K < ans:
            return -1
        x: int = int(str(x) + str(7))
    return ans


K: int = int(input())

print(solution(K))

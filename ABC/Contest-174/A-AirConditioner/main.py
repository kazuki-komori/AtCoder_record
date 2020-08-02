from typing import List


def solution(temp: int) -> str:
    if temp >= 30:
        return "Yes"
    else:
        return "No"


temp: int = int(input())
print(solution(temp))

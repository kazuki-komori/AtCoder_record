def solution(inp: str) -> str:
    total: int = 0
    for n in inp:
        total += int(n)
    if total % 9 == 0:
        return "Yes"
    else:
        return "No"


inp: str = str(input())
print(solution(inp))

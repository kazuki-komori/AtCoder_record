def solution(K: int) -> int:
    sevens: int = 0
    for i in range(1, K + 1):
        sevens = (sevens*10 + 7) % K
        if sevens == 0:
            return i
    return -1


K: int = int(input())

print(solution(K))

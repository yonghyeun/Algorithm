from math import gcd

N = int(input())

trees = [int(input()) for _ in range(N)]

# 나무들 거리 재기

dist = [trees[j] - trees[i] - 1 for i,j in zip(range(0,N-1), range(1,N))]

# 나무들 간격 재기

interval = list(map(lambda x: x + 1, dist))

# 나무들 최대 간격 재기 

final_gcd = gcd(*interval)

# 간격 사이에 들어갈 수 있는 나무 개수 세기 

print(
    sum([d // final_gcd for d in dist])
)
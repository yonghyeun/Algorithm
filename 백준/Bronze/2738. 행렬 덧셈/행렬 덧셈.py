N,M = map(int,input().split())

result = [[0] * M for _ in range(N)]

for _ in range(2): # 2개의 행렬을 주니까 
    for n in range(N): 
        row = list(map(int,input().split()))
        for m in range(M):
            result[n][m] += row[m]
            
for i in range(N):
    print(*result[i])
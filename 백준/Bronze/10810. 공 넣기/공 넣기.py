N,M = map(int,input().split())

arr = [0 for _ in range(N)]

for _ in range(M):
    
    i,j,k = map(int,input().split())
    
    for number in range(i-1,j):
        arr[number] = k
        
        
for _ in arr:
    print(_, end = ' ')
        
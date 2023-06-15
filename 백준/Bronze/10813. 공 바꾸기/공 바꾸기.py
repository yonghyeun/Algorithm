N,M = map(int,input().split())

arr = [_+1 for _ in range(N)]

for i in range(M):
    i,j = map(int,input().split())
    
    I, J = arr[i-1],arr[j-1]
    arr[i-1] = J
    arr[j-1] = I

    
for answer in arr:
    print(answer,end = ' ')
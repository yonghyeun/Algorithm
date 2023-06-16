N,M = map(int,input().split())

arr = [number + 1 for number in range(N)]

for trial in range(M):
    
    i,j = map(int,input().split())
    
    
    mid_value = arr[i-1:j]
    mid_value.reverse()
    
    arr = arr[:i-1] + mid_value + arr[j:]
    
for answer in arr:
    print(answer,end = ' ')

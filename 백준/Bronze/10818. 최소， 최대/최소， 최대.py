N = int(input())
arr = list(map(int,input().split()))

min_ = arr[0]
max_ = arr[0]
for i in range(N):
    if arr[i] < min_:
        min_ = arr[i]
    if arr[i] > max_:
        max_ = arr[i]
print(min_,max_)
    
    
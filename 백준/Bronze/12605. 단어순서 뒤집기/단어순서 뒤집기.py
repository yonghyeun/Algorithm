from collections import deque

N = int(input())

for _ in range(N):
    
    arr = deque(input().split())
    
    print(f'Case #{_+1}: ', end = '')
    
    while arr:
        if len(arr) > 1:
            print(arr.pop(), end =' ')
        else:
            print(arr.pop())
    
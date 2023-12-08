import sys 
input = sys.stdin.readline


T = int(input())

for _ in range(T):
  l = int(input())
  arr = sorted(list(map(int , input().split())))
  table = {var : True for var in arr}

  cnt = 0
  for i in range(l-1):
    for j in range(i+1 , l):
      dist = abs(arr[j] - arr[i])
      target = arr[j] + dist

      if target in table:
        cnt += 1
  
  print(cnt)
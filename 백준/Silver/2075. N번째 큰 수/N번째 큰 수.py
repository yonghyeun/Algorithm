import heapq 

hq = []

N = int(input())

for i in range(N):
  arr = list(map(int,input().split()))
  if i == 0:
    for var in arr:
      heapq.heappush(hq , var)
  
  for var in arr:
    root = hq[0]
    if var >= root:
      heapq.heappop(hq)
      heapq.heappush(hq , var)
    else:
      continue


print(hq[0])
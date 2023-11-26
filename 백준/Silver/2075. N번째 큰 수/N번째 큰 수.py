import heapq 

hq = []

N = int(input())

for i in range(N):
  arr = list(map(int,input().split()))
  if i == 0:
    for var in arr:
      heapq.heappush(hq , var)
  
  for var in arr:
    root = heapq.heappop(hq)
    if var >= root:
      heapq.heappush(hq , var)
    else:
      heapq.heappush(hq , root)

print(hq[0])
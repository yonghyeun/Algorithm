from collections import deque
import sys
input = sys.stdin.readline
N = int(input())
manuals = list(map(int,input().split()))
original = deque()

card = 1
for i in range(N-1 , -1 , -1):
  m = manuals[i]
  if m == 1:
    original.appendleft(card)
  elif m == 2:
    tmp = original.popleft()
    original.appendleft(card)
    original.appendleft(tmp)
  else:
    original.append(card)
  card += 1

for r in original:
  print(r , end =' ')
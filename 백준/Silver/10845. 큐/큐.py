N = int(input())

from collections import deque
import sys 

input = sys.stdin.readline

q = deque()

for _ in range(N):

  command = input().split()
  if command[0] == 'push':
    q.append(command[1])
  
  if command[0] == 'pop':
    if len(q) == 0:
      print(-1)
    else:
      print(q.popleft())
    
  if command[0] == 'size':
    print(len(q))

  if command[0] == 'empty':
    if len(q) == 0:
      print(1)
    else:
      print(0)

  if command[0] == 'front':
    if len(q) == 0:
      print(-1)
    else:
      print(q[0])

  if command[0] == 'back':
    if len(q) == 0:
      print(-1)
    else:
      print(q[-1])


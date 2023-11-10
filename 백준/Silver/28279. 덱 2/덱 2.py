from collections import deque
import sys 

input = sys.stdin.readline

N = int(input())

queue = deque()
for _ in range(N):
  command = input().split()

  if command[0] == '1':
    queue.appendleft(command[1])
  if command[0] == '2':
    queue.append(command[1])
  if command[0] == '3':
    if queue:
      print(queue.popleft())
    else:
      print(-1)
  if command[0] == '4':
    if queue:
      print(queue.pop())
    else:
      print(-1)
  if command[0] == '5':
    print(len(queue))
  if command[0] == '6':
    if queue:
      print(0)
    else:
      print(1)
  if command[0] == '7':
    if queue:
      print(queue[0])
    else:
      print(-1)
  if command[0] == '8':
    if queue:
      print(queue[-1])
    else:
      print(-1)
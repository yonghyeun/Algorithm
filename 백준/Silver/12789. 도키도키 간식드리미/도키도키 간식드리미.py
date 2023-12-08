from collections import deque

N = int(input())

arr = deque(map(int,input().split()))

stack = []
target = 1
while arr:
  x = arr.popleft()

  if x == target:
    target += 1
  else:
    stack.append(x)

  while stack:
    if stack[-1] == target:
      target += 1
      stack.pop()
    else:
      break

if target > N:
  print('Nice')
else:
  print('Sad')
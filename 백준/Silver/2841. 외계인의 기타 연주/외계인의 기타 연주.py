import sys 
input = sys.stdin.readline

N , P = map(int , input().split())

guitar = [[] for _ in range(6)]
command = [map(int, input().split()) for _ in range(N)]
on = 0
off = 0
for idx , prat in command:
  line = guitar[idx-1]
  if line:
    while line:
      finger = line[-1]
      if finger > prat:
        line.pop()
        off += 1
      elif finger < prat:
        line.append(prat)
        on += 1
        break
      else:
        break
    if not line:
      line.append(prat)
      on += 1
  else:
    line.append(prat)
    on += 1
print(on + off)

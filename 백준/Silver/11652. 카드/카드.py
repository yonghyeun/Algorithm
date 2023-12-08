import sys 
input = sys.stdin.readline

N = int(input())

hash = {}
for _ in range(N):
  key = int(input())
  try:
    hash[key] += 1
  except:
    hash[key] = 1

print(sorted(hash.items() , key = lambda x: (-x[1], x[0]))[0][0])
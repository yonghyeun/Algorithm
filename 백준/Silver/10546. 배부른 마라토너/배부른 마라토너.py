import sys 
input = sys.stdin.readline
N = int(input())

hash = {}
for _ in range(N*2 - 1):
  name = input().rstrip()
  if name in hash:
    del hash[name]
  else:
    hash[name] = True 

for name , _ in hash.items():
  print(name)
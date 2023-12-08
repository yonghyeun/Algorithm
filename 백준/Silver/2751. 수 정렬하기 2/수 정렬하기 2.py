import sys 
input = sys.stdin.readline
N = int(input()) 
arr = sorted([int(input()) for _ in range(N)]) 

for r in arr:
  print(r)

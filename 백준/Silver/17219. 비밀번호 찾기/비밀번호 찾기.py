import sys 

input = sys.stdin.readline

M,N = map(int,input().split())

hash = {}

for _ in range(M):
  s , p = input().split()
  hash[s] = p 

for _ in range(N):
  print(hash[input().rstrip()])
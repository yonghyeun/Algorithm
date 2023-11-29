import sys
input = sys.stdin.readline

N , M = map(int , (input().split()))
memo = {}
for _ in range(N):
  keyword = input().rstrip()
  memo[keyword] = True

cnt = N 
for _ in range(M):
  keywords = input().rstrip().split(',')
  for key in keywords:
    try:
      if memo[key]:
        memo[key] = False
        cnt -= 1
    except:
      continue
  print(cnt)
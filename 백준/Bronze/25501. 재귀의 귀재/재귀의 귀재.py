def recursion(s,start , end, cnt = 1):
  
  if start >= end:
    return 1, cnt 
  
  if s[start] != s[end]:
    return 0, cnt
  else:
    cnt += 1
    return recursion(s, start + 1 , end -1, cnt)
  

def solve():
  s = input()
  print(*recursion(s , 0 , len(s) - 1))

T = int(input())
for _ in range(T):
  solve()
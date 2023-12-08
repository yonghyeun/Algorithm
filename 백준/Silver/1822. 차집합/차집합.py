A_s , B_s = map(int,input().split())

A = set(map(int,input().split()))
B = set(map(int,input().split()))

result = sorted(list(A-B))

if result:
  print(len(result))
  print(*result)
else:
  print(0)
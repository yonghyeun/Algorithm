from collections import defaultdict

hash = defaultdict(int)

M,N = map(int,input().split())

for _ in range(M + N):
  hash[input()] += 1

whothatfuck = []
cnt = 0
for name , value in hash.items():
  if value == 2:
    cnt += 1
    whothatfuck.append(name)

print(cnt)
whothatfuck.sort()
for _ in range(cnt):
  print(whothatfuck[_])
from collections import defaultdict

hash = defaultdict(int)

# defaultdict에 차곡 차곡 개수 쌓기
M = int(input())
cards = list(map(int,input().split()))
for c in cards:
  hash[c] += 1

# test하기
N = int(input())
test = list(map(int,input().split()))

for t in test:
  print(hash[t], end = ' ')
from collections import defaultdict 
N = int(input())
hash = defaultdict(int)
for _ in range(N):
  name , plus = input().split('.')
  hash[plus] += 1


result = sorted(hash.items() , key = lambda x: x[0])

for name , plus in result:
  print(f'{name} {plus}')
M,N = map(int,input().split())
hash = {input() : 1 for _ in range(M)}

cnt = 0 
for _ in range(N):
  value = input()
  try:
    cnt += hash[value]
  except:
    pass
print(cnt)
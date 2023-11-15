N = int(input())

hash = {}
hash['ChongChong'] = True # 무지개 춤에 감염 되었을 경우엔 True 

for _ in range(N):
  p1,p2 = input().split()
  '''try , except를 이용해 감염된 사람들을 hash table 에 저장'''
  try:
    if hash[p1]:
      hash[p2] = True 
  except:
    pass 

  try:
    if hash[p2]:
      hash[p1] = True 
  except:
    pass 

print(len(hash.keys()))
import sys 
input = sys.stdin.readline
N , Q = map(int , input().split())

occup_dict = {}
arr = [int(input().rstrip()) for _ in range(Q)]

for K in arr:
  occup_list = []
  p = K 
  while p != 1: # root node 까지 점유된 땅이 있는지 확인
    if p in occup_dict:
      occup_list.append(p)
    p //= 2 
  
  if occup_list: # 점유된 땅이 있다면
    print(occup_list[-1]) # 가장 root node 와 가까운 땅을 print
  else: # 점유된 땅이 없다면
    print(0) # 꽥꽥이 너가 점유해 
    occup_dict[K] = True
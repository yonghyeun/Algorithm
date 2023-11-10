from collections import deque

N = int(input())

condition = list(map(int,input().split()))
queuestack = list(map(int,input().split()))

# stack 은 무시하고 queue 의 값만 담긴 deqeue 생성
onlyqueue = deque([x for i,x in enumerate(queuestack) if condition[i] == 0]) #2B
M = int(input())
new_value = list(map(int,input().split()))

result = []
for m in range(M): # M
  onlyqueue.appendleft(new_value[m]) # 2
  result.append(onlyqueue.pop()) # 2
print(*result)  
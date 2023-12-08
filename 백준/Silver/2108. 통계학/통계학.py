from collections import defaultdict 
import sys 

input = sys.stdin.readline 

N = int(input())


total = 0 
arr = []
hash = defaultdict(int)
for _ in range(N):
  var = int(input())
  total += var 
  hash[var] += 1 # count 

sorted_array = sorted(hash.keys())

# mean 값 
mean = round(total / N)
# median 
target = N // 2 # 정렬된 배열에서 중앙에 위치하는 인덱스를 의미
for a in sorted_array:
  if target - hash[a] < 0:
    median = a 
    break
  target -= hash[a]
# 최빈값 (여러 개 있을 때는 최빈값 중 두 번째로 작은 값을 출력)
max_freq = max(hash.values())
cnt = 0
# 해당 반복문을 순회하면서 유일한 max_freq거나 
# # 동일한 max_freq가 2개 이상 있어도 2번째로 작은 값이 freq 에 담김 
for a in sorted_array:
  if cnt > 1:
    break
  if hash[a] == max_freq:
    cnt += 1
    freq = a 

range_ = sorted_array[-1] - sorted_array[0]

print(mean)
print(median)
print(freq)
print(range_)
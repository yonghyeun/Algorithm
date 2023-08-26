from itertools import product

N = input()

arr = []
for i in range(len(N)):
    if i != 0:
        arr.append([j for j in range(0,10)])
    else:
        arr.append([j for j in range(0,int(N[i]) + 1)])
    
arr.reverse() # 자리수를 고려하기 위해 reverse
cnt = 0

result_arr = []

for comb in product(*arr):
    
    total_sum = sum(var * 10**i for i, var in enumerate(comb))
    part_sum = sum(comb)
    
    result = total_sum + part_sum
    
    if result == int(N):
        result_arr.append(total_sum) 
        cnt += 1

    
if cnt == 0:
    print(0)
else:
    print(min(result_arr))
memo = {0 : 0 , 1 :1}

N = int(input())
for i in range(2 , N + 1):
  memo[i] = memo[i -1] + memo[i -2]

print(memo[N])
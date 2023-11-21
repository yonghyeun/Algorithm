memo = {0 : 1 , 1: 1}

def memo_fibo(n : int) -> int:
  if n in memo:
    return memo[n]
  else:
    temp = memo_fibo(n-1) + memo_fibo(n-2)
    memo[n] = temp 
    return memo[n]
  
N = int(input())
memo_fibo(N)
print(memo[N-1])
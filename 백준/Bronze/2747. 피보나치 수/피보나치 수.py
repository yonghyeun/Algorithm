memo = {1 : 1 , 2: 1}

def memo_fibo(n : int) -> int:
  if n in memo:
    return memo[n]
  else:
    memo[n] = memo_fibo(n-1) + memo_fibo(n-2) 
    return memo[n]
  
N = int(input())
print(memo_fibo(N))

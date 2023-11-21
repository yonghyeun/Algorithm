# fibo 반복문으로 구현하기

D = 1000000007

def solve():
  N = int(input())
  if N <= 1:
    return N
  
  fn_2 , fn_1 = 0 ,1

  for _ in range(N -1):
    fn = (fn_2% D + fn_1%D) % D 
    fn_2, fn_1 = fn_1 , fn 
  return fn

print(solve())

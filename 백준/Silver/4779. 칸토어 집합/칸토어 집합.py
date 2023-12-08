'''
cantorian 알고리즘 

0 <= N <= 12 에서 

기본적으로 가운데 공백 부분을 기준으로 대칭이다. 

cantorian(1) = '-' + ' ' + '-' 라고 했을 때 
cantorian(2) = cantorian(1) + ' ' * 3 + cantorian(1)
cantorian(3) = cantorian(2) + ' ' * 3 ** 2 + cantorian(2)
...

그러니

cantorian(n) = cantorian(n-1) + ' ' * 3 ** (n-1) + cantorian(n-1) 

'''

def cantorian(n : int) -> str:
  if n == 0:
    return '-'
  
  return cantorian(n-1) + ' ' * 3 ** (n-1) + cantorian(n-1)

def solve():
  print(cantorian(int(input())))

while True:
  try:
    solve()
  except:
    break
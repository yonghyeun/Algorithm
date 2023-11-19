import sys 
input = sys.stdin.readline

def check(arr : list[str], stack : list[str]):

  while arr: # stack, arr 에 담긴 글자가 모두 사라질 때 까지 반복

    if stack: # 만약 stack 에 값이 있다면
      if stack[-1] == arr[-1]: # 있으면서 arr 의 마지막 값과 같다면
        stack.pop()
        arr.pop()
      else:
        stack.append(arr.pop())
    else:
      stack.append(arr.pop())

    '''
    반복문이 끝나면 두 가지 경우가 남는다
    1. arr 모두 비고 stack에 값이 없을 경우 : good string 
    2. arr는 모두 비고 stack에는 값이 남았을 경우 : not good string
    '''
    
  if stack:
    return 0 
  else:
    return 1


N = int(input())
cnt = 0
for _ in range(N):
  
  string = list(input().rstrip())
  s = [string.pop()] # 초기 스택은 한 값을 일단 pop 해둔 형태
  cnt += check(string , s)
print(cnt)
def solve():
  i = 1
  while True:
    string = input()
    if '-' in string:
      break
    stack = []
    cnt = 0

    for s in string:
      if s == '}' and stack:
        stack.pop()
      elif s == '}' and not stack:
        cnt += 1
        stack.append('{')
      else:
        stack.append(s)
    
    cnt += len(stack) // 2

    print(f'{i}. {cnt}')
    i += 1

solve()
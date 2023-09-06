sub = []
stack = []
result = []
current = 1
sucesse = True
for _ in range(int(input())):
    
    num = int(input()) 
    
    while current <= num: # 현재 들어온 값보다 작은 값들을 stack 에 append 
        stack.append(current)
        sub.append('+')
        current += 1
    # 만약 current 값과 num 값이 같아진다면 stack 은 다 쌓였을거임 
    
    if stack[-1] == num: # 끝나고 나서 stack 의 마지막 값이 num 과 같다면
        result.append(stack.pop()) # 마지막 값을 pop 하고 result 에 append
        sub.append('-')
    else: # 다르다면
        print('NO')
        sucesse = False
        break

if sucesse == True:
    for s in sub:
        print(s)
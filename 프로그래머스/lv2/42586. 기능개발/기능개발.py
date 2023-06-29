from collections import deque
def solution(progresses, speeds):
    arr = deque()

    for p,s in zip(progresses, speeds):
        days = 0
        while p < 100:
            p += s
            days += 1 
        arr.append(days)
        
    answer = []
    stack = []
    
    while arr:

        current = arr.popleft()

        if len(stack) == 0:
            stack.append(current)
        else:
            if current > stack[0]:
                answer.append(len(stack))
                while stack:
                    stack.pop()
                stack.append(current)
            else:
                stack.append(current)
    if len(stack) != 0:    
        answer.append(len(stack))

    
    
    return answer
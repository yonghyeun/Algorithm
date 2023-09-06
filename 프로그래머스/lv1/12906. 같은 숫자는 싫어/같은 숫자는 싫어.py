from collections import deque

def solution(arr):
    answer = []
    arr = deque(arr)
    
    for i in range(len(arr)):
        
        current = arr.popleft()
        
        if i == 0:
            answer.append(current)
            past = current
        else:
            if current != past:
                answer.append(current)
                past = current
            else:
                continue

    return answer
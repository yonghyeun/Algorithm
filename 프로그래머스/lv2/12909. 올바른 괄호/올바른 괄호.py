def solution(s):
    answer = True
    
    cnt = 0 
    
    for string in s:
        
        if string == '(':
            cnt += 1 
        else:
            cnt -= 1
            
        if cnt < 0:
            answer = False
            break
            
    if cnt != 0:
        answer = False
            
    return  answer 

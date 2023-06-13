N = int(input())

for trial in range(N):
    string = input().strip()
    
    count = 0
    
    for s in string:
        
        if s == '(':
            count += 1
        else:
            count -= 1
            
        if count <= -1:
            break
    if count == 0:
        print('YES')
    else:
        print('NO')            
        

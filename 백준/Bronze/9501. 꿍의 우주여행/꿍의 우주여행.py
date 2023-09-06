T = int(input())

for _ in range(T):
    
    num, distance = map(int,input().split())
    
    succ = 0 
    
    for koko in range(num):
        
        v,f,c = map(int,input().split())
        
        if v/c * f >= distance:
            succ += 1 
        else:
            continue
        
    print(succ)
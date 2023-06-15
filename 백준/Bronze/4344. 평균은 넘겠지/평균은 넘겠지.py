C = int(input())

for _ in range(C):
    scores = list(map(int,input().split()))
    number = scores.pop(0)
    
    avg = sum(scores)/len(scores)
    count = 0
    
    for s in scores:
        if s > avg:
            count += 1/len(scores) 
            
    count = round(count * 100,3)
    
    print(f'{count:.3f}%')
    
    
    
    
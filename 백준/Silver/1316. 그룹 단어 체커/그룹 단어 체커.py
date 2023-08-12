N = int(input())

result = 0

final_result = 0
for _ in range(N):
    string = input()
    
    i,mid_result = 0,0
    
    while i != len(string):
        cnt = string.count(string[i])
        
        if cnt == 1:
            mid_result += 1
            i += 1
        else:
            if string[i:i+cnt] == string[i] * cnt:
                mid_result += cnt
                i += cnt
            else:
                break
            
    if mid_result == len(string):
        final_result += 1
    
print(final_result)  
    
    
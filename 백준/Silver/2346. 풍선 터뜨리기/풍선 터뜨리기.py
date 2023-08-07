def orginization(arr : list, target : int):
    
    last = len(arr)
    
    if target >= 0:
        
        '''
        정방향
        '''
        try: # zero division error 방지
            target = target % last - 1 # 다음 위치까지 길이가 리스트 길이보다 길든 짧든 상관없게 만들기
            
            new_arr = arr[target:last] + arr[0:target]
        except:
            return
                
    elif target < 0:
        '''
        역으로 터져야 하면 
        '''
        try:
            target = abs(target) % last
            
            new_arr = arr[last - target:last] + arr[0:last - target]
        except:
            return
    else:
        new_arr = arr
        
    
    return new_arr

N = int(input()) 
arr = [balloon + 1 for balloon in range(N)]
targets = list(map(int,input().split()))

result = []

for _ in range(N):
    
    result.append(arr.pop(0))
    target = targets.pop(0)
    
    arr = orginization(arr, target = target)
    targets = orginization(targets, target = target)

print(*result)
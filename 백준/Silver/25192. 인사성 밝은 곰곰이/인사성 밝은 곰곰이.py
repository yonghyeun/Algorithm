N = int(input())

arr = []
cnt = 0
for _ in range(N):
    
    action = input().rstrip()
    if action == 'ENTER':
        cnt += len(set(arr))
        arr = []
        pass
    else:
        arr.append(action)
        
if action != 'ENTER': # 마지막 action 이 enter 아니라면
    print(cnt + len(set(arr)))
else:
    print(cnt)
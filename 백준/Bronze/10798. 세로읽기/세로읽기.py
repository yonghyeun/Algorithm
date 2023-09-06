N = 5 

arr = [list(input().rstrip()) for _ in range(N)]

for i in range(15): # 최대 가질 수 있는 열
    for j in range(N): # 2차원 배열의 행 
        try:
            print(arr[j][i],end = '')
        except:
            pass
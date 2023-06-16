import sys 

# 제한 시간 3초 
# 1 <= N <= 100,000

# 시간 제한에 따른 알고리즘 설계 

# 파이썬은 초당 2천만번 ~ 1억의 연산 가능 
# 최악의 상황을 가정하기 위해 초당 2천만번으로 잡자 

# N 의 개수는 100,000 
# 100,000 / 3 = 대략 초당 30000 번 

# 시간 복잡도 계산하는건 이론을 공부하고 해봐야겠다. 찾아봐도 이해가 잘 안되네 ㅠㅠ 

N = int(input())

user = []

for _ in range(N):
    user.append(list(input().split()))
    # user list 안에 [나이, 이름] 순으로 append 됨 
    
user.sort(key = lambda x: int(x[0])) # 각 list 에서 0 번째 value 값으로 기준으로 오름차순 정렬 

for i in range(N):
    print(user[i][0], user[i][1])
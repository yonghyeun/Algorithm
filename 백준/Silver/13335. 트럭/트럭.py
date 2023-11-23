from collections import deque
N , length , limit_weight = map(int,input().split())
arr = list(map(int,input().split()))

cnt = 0
ridge = deque([0 for _ in range(length)])
current_weight = 0

for truck in arr:
  if current_weight + truck <= limit_weight: # 만약 현재 다리에 트럭이 올라탈 수 있으면
    current_weight -= ridge.popleft() # 맨 앞에 있는 트럭 빼거나 이동 시키고 
    current_weight += truck # 들어오는 트럭의 무게 추가9 
    ridge.append(truck)
    cnt += 1
  else: # 만약 현재 다리에 트럭이 못들어와 무게 때문에 
    while current_weight - ridge[0] + truck > limit_weight: # 다음 트럭이 들어올 수 있을 때 까지 트럭들 이동 시키기
        # 트럭들 한 칸 이동 시키기
        current_weight -= ridge.popleft() 
        ridge.append(0) 
        cnt += 1
    # 반복문이 끝나면 이제 트럭이 들어올 수 있음 
    current_weight -= ridge.popleft()
    current_weight += truck
    ridge.append(truck)
    cnt += 1

# for 문이 끝나고 나면 다리에 트럭이 남아있을 수도 있음 

while current_weight != 0: # 다리에 남은 트럭이 없을 때 까지 트럭들 이동 시키기
   current_weight -= ridge.popleft()
   cnt += 1

print(cnt)


N = int(input())

start = {input() : i for i in range(N)} 
end_cars = [input() for _ in range(N)]

cnt = 0
for i in range(N):
  base_car = end_cars[i]
  for j in range(i + 1 , N):
    after_car = end_cars[j] 
    if start[after_car] < start[base_car]:
      cnt += 1
      break

print(cnt)
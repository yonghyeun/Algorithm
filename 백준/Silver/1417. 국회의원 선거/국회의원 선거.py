N = int(input())
dasom = int(input())

arr = [int(input()) for _ in range(N -1)] 

cnt = 0 

if len(arr) == 0:
  print(0)
else:  
  while True:
    max_value = max(arr)
    max_idx = arr.index(max_value)
    max_person = arr.pop(max_idx)

    if dasom <= max_person:
      dasom += 1
      max_person -= 1
      cnt += 1
      arr.append(max_person)
    else:
      break

  print(cnt)
def binary_search(arr : list[int] , target : int, start,end) -> int:
  
  
  while start <= end:
    mid = (start + end) // 2
    if arr[mid] == target:
      return 1 
    if arr[mid] > target:
      end = mid - 1
    if arr[mid] < target:
      start = mid + 1
  return 0 

M = int(input())

arr = sorted(list(map(int, input().split())))

N = int(input())

targets = list(map(int,input().split()))

for t in targets:
  print(binary_search(arr, t , 0, M - 1), end = ' ')
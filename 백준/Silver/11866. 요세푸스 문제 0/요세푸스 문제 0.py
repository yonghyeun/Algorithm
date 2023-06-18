n, k = map(int, input().split())
arr = [i for i in range(1, n+1)]
answer = []
idx = k-1
count = 1
while True:
  answer.append(arr[idx])
  arr.remove(arr[idx])
  if not len(arr):
    break
  idx = idx+k-1
  if idx>=len(arr):
    idx = idx%len(arr)
print('<', end='')
for i in range(n):
  if i == n-1:
    print(answer[i], end=">")
  else:
    print(answer[i], end=', ')
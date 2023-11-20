N = int(input())
M = int(input())
S = input()

IOI = 0
idx = 0
cnt = 0

while idx < M - 2: # 문자열에서부터 마지막 IOI 까지 탐색 하기
  if S[idx] == 'I' and S[idx + 1] == 'O' and S[idx + 2] == 'I':
    IOI += 1 
    if IOI == N:
      cnt += 1
      IOI -= 1
    idx += 1
  else:
    IOI = 0
  idx += 1
print(cnt)
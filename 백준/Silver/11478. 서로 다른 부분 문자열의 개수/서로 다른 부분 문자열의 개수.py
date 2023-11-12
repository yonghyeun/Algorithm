S = input()
# 길이가 1인 문자열 hash table 에 저장 
hash = {s:True for s in S}

# 길이가 2~len(S) 까지 가능한 부분 문자열 저장
'''부분 문자열은 연속된 일부분이기 때문이 인덱스 슬라이싱으로 가져오자'''

length = len(S)
for gap in range(2 , length + 1): # 부분 문자열이 가질 수 있는 길이 개수
  for i in range(length): # 가능한 시작 부분 인덱스
    try:
      hash[S[i:i+gap]] = True
    except:
      break
print(len(hash.keys()))
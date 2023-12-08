'''
이진 탐색을 쓰는 이유

제일 긴 막대기의 길이를 T 라고 할 때 

이 때 T를 등분하는 포인트를 l 이라고 하고 잘려져 나오는 막대기 개수를 R 이라고 해보자

T의 중간 지점을 자르면 T 는 2등분 된다.
T의 중간 지점의 중간 지점을 자르면 T는 4등분이 된다.
T의 중간 지점의 중간 지점의 중간지점을 자르면 T는 8등분이 된다.

가장 길게 자를 수 있는 방법은 가장 긴 막대기인 T를 얼마나 잘 활용해서 
가장 긴 막대기를 만들고 그 범위 만큼 다른 막대기들도 나눠 
타겟인 N만큼의 막대기를 만들 수 있는가에 대한 문제가 되는 것이다. 
'''

K,N = map(int,input().split())
lines = [int(input()) for _ in range(K)]

T = max(lines) # 가장 긴 막대기의 길이

def cut(arr  : list[int], length : int) -> int:
  '''
  arr의 랜선들로 length 길이의 막대기를 얼마나 만들 수 있는가
  '''
  return sum([x // length for x in arr])

def binary(start,end):
  global lines, N
  while start <= end:
    mid = (start + end) // 2 # 만들 수 있는 가장 긴 길이
    R = cut(lines, mid) # 그 길이로 만든 막대기 개수
    if R >= N: 
      '''
      만약 막대기를 더 만들 수 있다면 막대기를 더 길게 잘라도 괜찮다.
      '''
      start = mid + 1
    
    if R < N: 
      '''
      만약 만대기가 부족하게 만들어진다면 더 짧게 막대기를 만들어야 한다.
      '''
      end = mid - 1
  # 반복문이 끝났단 것은 start <= end 라는 것이다.
  # 그러니 end 가 자를 포인트
  return end 

print(binary(start = 1 , end = T))
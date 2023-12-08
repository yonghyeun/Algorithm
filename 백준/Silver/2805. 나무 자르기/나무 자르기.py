'''
파라매트릭 서치로 풀면 되는 문제이다. 

용어를 먼저 정리해보자 

- 절단기의 높이 : H 
- 나무의 수 : N 
- H로 N개의 나무(T)를 잘랐을 때 획득 가능한 나무의 길이 : max(0, T - H )
  - max(0 , T-H) 인 이유는 H 가 T 보다 클 경우에는 나무가 잘리지 않기 때문에 0 을
    return 해야 한다
- 설정 가능한 H 의 범위 : 0 ~ 가장 높은 나무
- 타겟 길이 : M
- 제약 조건 : 나무를 최대한 조금만 잘라라 -> H 를 최대화 해라 

문제로 넘어가자

- 최적화 문제 : M 만큼의 나무를 얻기 위한 H의 최대값은 무엇인가 ? 
- 결정 문제 : H 일 때 M 만큼의 나무를 얻는가 ? 
'''

import sys 

input = sys.stdin.readline


def binary(arr : list[int] , start : int , end : int , target : int) -> int:
  
  while start <= end:
    mid = (start + end) // 2 
    volume = sum(max(0,x-mid) for x in arr) 
    if volume >= target :
      '''
      만약 target 보다 더 많은 양을 수확했다면
      높이를 높여서 조금만 수확하자 
      '''
      start = mid + 1 
    else:
      '''
      만약 target 보다 더 적은 양을 수확했다면
      높이를 낮춰서 더 많이 수확하자 
      '''
      end = mid - 1 

  return end


N , M = map(int,input().split()) # N 나무의 개수 , M 목표 
trees = list(map(int,input().split())) # 나무들을 담은 배열
max_tree = max(trees) # 가장 높은 나무의 길이 : 설정 가능한 H의 범위가 된다 

print(binary(arr = trees , start = 1 , end = max_tree, target = M))
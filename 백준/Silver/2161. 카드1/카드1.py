from collections import deque


def remove_and_shuffle(arr : deque[int]):

  while arr: # arr의 모든 값이 사라질 때 까지 반복
    print(arr.popleft(), end =' ')
    try:
      arr.append(arr.popleft())
    except:
      break

N = int(input()) 

cards = deque(range(1, N + 1))
remove_and_shuffle(cards)
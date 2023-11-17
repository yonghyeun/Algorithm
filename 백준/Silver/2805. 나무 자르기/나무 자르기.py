from collections import Counter 

N , M = map(int,input().split())
trees = list(map(int,input().split()))
counter_trees = Counter(trees)
max_tree = max(trees)

def without_counter( arr : list[int] , start , end , target):

  while start <= end:
    mid = (start  + end ) // 2
    volume = sum(max(0,x - mid) for x in arr)

    if volume >= target:
      start = mid + 1 
    else:
      end = mid - 1 
  
  return (start , end ,mid) 

def with_counter( counter : dict[int,int] , start , end , target):

  while start <= end:
    mid = (start  + end ) // 2
    volume = sum(max(0,(x - mid) * num) for x , num in counter.items())

    if volume >= target:
      start = mid + 1 
    else:
      end = mid - 1 
  
  return end

print(with_counter(counter_trees , 1, max_tree, M))

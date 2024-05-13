class MaxHeap:
  def __init__(self , L = []):
    self.A = L
    self.length = len(self.A)
    self.make_heap()

  def __str__(self):
    return str(self.A)
  
  def heapify_down(self,k):
    n = self.length
    '''
    n = 힙의 전체 노드수 
    A[k] 를 힙 성질을 만족하는 위치로 내려가면서 재배치
    '''
    
    while 2 * k + 1 < n:
      L,R = 2 * k + 1 , 2 * k + 2
      if self.A[L] > self.A[k]:
        m = L 
      else:
        m = k 
      
      if R < n and self.A[R] > self.A[m]:
        m = R 

      if m != k:
        self.A[k] , self.A[m] = self.A[m] , self.A[k]
        k = m 

      else:
        break
  
  def make_heap(self):
    n = self.length
    for k in range(n-1 , -1, -1):
      self.heapify_down(k)

  def heapify_up(self):
    k = self.length - 1 # insert 된 값의 인덱스 
    # 배열의 마지막이기 때문에 insert 된 값의 인덱스는 len - 1 

    while k > 0 and self.A[(k-1) // 2] < self.A[k]: 
      '''
      반복문은 root node가 아니면서 자식 노드가 부모 노드보다 클 때 까지 반복 
      '''
      self.A[k] , self.A[(k-1) // 2] = self.A[(k-1) // 2]  , self.A[k]
      # while 문이 작동 되었다는 것은 insert 된 값이 부모노드보다 값이 크단 것이니
      # 부모노드와 자식 노드의 값을 변경 
      k = (k-1) // 2  # 자리가 바뀐 후 그 위 부모노드와의 값을 비교 

  def insert(self,value):
    self.A.append(value)
    self.length += 1
    self.heapify_up()

  def find_max(self):
    if self.length == 0:
      return None
    else:
      return self.A[0]
  
  def delete_max(self):
    if self.length == 0:
      return None
    else:
      self.A[0] = self.A.pop() # 마지막 leaf node를 root node 로 보냄
      self.length -= 1  
      self.heapify_down(0) # root node 부터 heapfipy_down 시행 
  

print('==' * 20)
print('MaxHeap')
arr = [1,2,3,4,5,6]
print('정렬 안된 이진 트리 : ', arr)
a = MaxHeap(L = arr)
print('현재 힙 성질을 만족하는 이진 트리 : ',a.A)
a.insert(7)
print('7 insert 이후 이진 트리 :', a.A)
print('find_max : ',a.find_max())
a.delete_max()
print('delete max 이후 값 : ',a.A)


# class MinHeap:

#   def __init__(self, L = []):
#     self.A = L 
#     self.length = len(self.A)
#     self.make_heap()

#   def heapify_down(self, k):

#     n = self.length
#     while 2 * k + 1 < n: # leaf node가 존재하지 않는 경우까지 반복
#       L,R = 2 * k + 1 , 2 * k + 2
#       # K,L,R 비교하기
#       if self.A[k] > self.A[L]:
#         m = L 
#       if self.A[L] > self.A[R]:
#         m = R
#       # 만약 값을 MinHeap 성질을 만족하지 못해 swap 해야 한다면
#       if m != k:
#         self.A[m] , self.A[k] = self.A[k] , self.A[m]
#         # swap 후 swap 한 값에 대해서 내려가며 반복문 수행 
#         k = m 
#       else:
#         break

#   def make_heap(self):
#     n = self.length

#     for k in range((n + 1 // 2), -1 , -1):
#       self.heapify_down(k)

#   def heapify_up(self):
#     k = self.length  - 1 

#     # leaf node 에 대한 heapify_up 할 것이니까 leaf_node의 인덱스는 
#     # self.legnth - 1

#     while k > 0 and self.A[(k - 1) // 2] > self.A[k]:
#       # root node 가 아니면서 자식노드가 부모노드보다 값이 작을 때 시행
#       self.A[k] , self.A[(k-1) // 2] = self.A[(k-1) //2] , self.A[k]
#       k = (k-1) // 2

#   def insert(self,value):
#     self.A.append(value)
#     self.length += 1 
#     self.heapify_up()

#   def find_min(self):
#     if self.length == 0:
#       return None
#     else:
#       return self.A[0]

#   def delete_min(self):
#     if self.length != 0: # heap 이 비어있지 않다면
#       self.A[0] = self.A.pop()
#       self.length -= 1
#       self.heapify_down(0)

# print('==' * 20)
# print('MinHeap')
# arr = [2,6,5,1,3,0,7]
# print('정렬 안된 이진 트리 :' , arr)
# b = MinHeap(L = arr )
# print('현재 힙 성질을 만족하는 이진 트리 : ',b.A)
# b.insert(-1)
# print('-1 insert 이후 이진 트리 :', b.A)
# print('find_min : ',b.find_min())
# b.delete_min()
# print('delete min 이후 값 : ',b.A)



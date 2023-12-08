class Node:

  def __init__(self,  key):
    self.key = key 
    self.parent = self.left = self.right = None

  def __str__(self):
    return str(self.key)
  
  def preorder(self):
    if self != None:
      print(self.key)
      if self.left:
        self.left.preorder()
      if self.right:
        self.right.preorder()

  def inorder(self):
    if self != None:
      if self.left:
        self.left.inorder()
      print(self.key)
      if self.right:
        self.right.inorder()

  def postorder(self):
    if self != None:
      if self.left:
        self.left.postorder()
      if self.right:
        self.right.postorder()
      print(self.key)

  
class BST:

  def __init__(self):
    self.root = None 
    self.size = 0

  def __len__(self):
    return self.size
  
  def __iter__(self):
    '''
    root node 는 Node 객체 
    Node 객체에 설정되어 있는 __iter__ 에 맞게 함수가 실행되도록 한다.
    '''
    return self.root.__iter__()
  
  def find_loc(self, key):
    '''
    key 값 node 가 있다면 해당 node 를 return
    없다면 해당 node 가 삽입 될 부모 node 를 return
    ''' 
    if self.size == 0:
      return None 
    
    p = None # 부모 노드
    v = self.root  # 자식 노드 

    while v != None: # 자식 노드가 none 이 아닐 때 까지 
      if v.key == key:
        return v 
      elif key <= v.key:
        p = v 
        v = v.left
      else:
        p = v 
        v = v.right

    return p 
  
  def search(self,key):
    v = self.find_loc(key)
    if v == None:
      return None
    else:
      return v 

  def insert(self,key):
    p = self.find_loc(key)
    
    if p == None or p.key != key:
      v = Node(key)
      if p == None:
        self.root = v
      else:
        if v.key <= p.key:
          p.left = v 
        else:
          p.right = v
        v.parent = p 
      self.size += 1
    else:
      print('key is already in trees')
      return p



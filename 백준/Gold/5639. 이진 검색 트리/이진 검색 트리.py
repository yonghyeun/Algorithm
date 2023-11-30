import sys 
input = sys.stdin.readline
sys.setrecursionlimit(10000000)

class Node:

    def __init__(self,key):
      self.key = key 
      self.left = self.right = None

class BST:

  def __init__(self):
    self.root = None 
    self.left = self.right = None

  def find_parent(self, key):
    # 들어갈 자리의 부모 노드 찾기 

    parent = None
    child = self.root

    while child is not None:
      if key < child.key:
        parent , child = child , child.left 
      else:
        parent , child = child , child.right
    return parent

  def insert(self, key):
    p = self.find_parent(key)
    if p == None:
      self.root = Node(key)
    else:
      if key < p.key:
        p.left = Node(key)
      else:
        p.right = Node(key)

tree = BST()

while True:
  inputs = input().rstrip()
  if len(inputs) == 0:
    break
  else:
    key = int(inputs)
  tree.insert(key)

def posterial(node):
  if node.left != None:
    posterial(node.left)
  if node.right != None:
    posterial(node.right)
  print(node.key)

posterial(tree.root)
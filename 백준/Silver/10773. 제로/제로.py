class Stack:
    
    def __init__(self):
        
        self.items = []
        self.size = 0
        
    def push(self,value):
        self.items.append(value)
        self.size += 1
    def pop(self):
        
        if self.size ==0:
            pass
        else:
            self.items.pop()
            self.size -= 1
    def result(self):
        
        print(sum(self.items))
        
stack = Stack()

K = int(input())

for _ in range(K):
    
    q = int(input())
    
    if q != 0:
        stack.push(q)
    else:
        stack.pop()
        
stack.result()           
        
 
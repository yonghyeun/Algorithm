string = input()
bomb = input()

stack = []

for s in string:
    
    stack.append(s)
    
    if s == bomb[-1] and ''.join(stack[-len(bomb):]) == bomb:
        del stack[-len(bomb):]
        
if len(stack) == 0:
    print('FRULA')
else:
    print(''.join(stack))
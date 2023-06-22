while True:
    
    string = input()
    
    stack = []
    balanced = True
    
    if string == '.':
        break
    else:
    
        for s in string:
            
            if s == '[' or s == '(':
                stack.append(s)
                
            elif s == ']':
                if len(stack) != 0 and stack[-1] == '[':
                    stack.pop()
                else:
                    balanced = False
                    break
                
            elif s == ')':
                if len(stack) != 0 and stack[-1] == '(':
                    stack.pop()
                else:
                    balanced = False
                    break
                
        if len(stack) == 0 and balanced == True:
            print('yes')
        else:
            print('no')
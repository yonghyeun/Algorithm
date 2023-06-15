string = list(input())
answer = []
for alphabet in 'abcdefghijklmnopqrstuvwxyz':
    if alphabet in string:
        answer.append(string.index(alphabet))
        continue
    else:
        answer.append(-1)
    
for _ in answer:
    print(_,end = ' ')
    
string = input().upper()

setted = list(set(string))
cnt = [string.count(s) for s in setted]    

if cnt.count(max(cnt)) == 1:
    print(setted[cnt.index(max(cnt))])
else:
    print('?')
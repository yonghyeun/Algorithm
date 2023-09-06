arr = ['c=','c-','dz=','d-','lj','nj','s=','z=']

string = input().rstrip()

cnt = 0

for a in arr:
    cnt += string.count(a)    
    string = string.replace(a,' ')
    
print(len(string.replace(' ','')) + cnt)
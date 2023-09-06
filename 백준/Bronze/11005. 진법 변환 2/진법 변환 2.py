N,B = map(int,input().split())

result = []

while N > 0:
    
    result.append(N % B)
    
    N = N // B 
        
result.reverse()

for r in result:
    
    if r >= 10:
        print(chr(r + 55), end = '')
    else:
        print(r, end = '')

N = int(input()) 
cnt,num = 1,2
while N - num ** 2 > 0:
    cnt += 1 
    num += 1 
    
print(cnt)
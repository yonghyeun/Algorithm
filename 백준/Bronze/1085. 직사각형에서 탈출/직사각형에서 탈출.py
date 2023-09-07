x,y,w,h = map(int,input().split())
    
row = min(x,w-x)
col = min(y,h-y)
    
print(min(row,col))
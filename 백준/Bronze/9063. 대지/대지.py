n = int(input())

x_s = []
y_s = []

for _ in range(n):
    x,y = map(int,input().split())
    
    x_s.append(x)
    y_s.append(y)
    
print(
    (max(x_s) - min(x_s)) *
    (max(y_s) - min(y_s)) 
)
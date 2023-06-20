import sys 

input = sys.stdin.readline

N = int(input())

result = []

for i in range(N):
    [a,b] = map(int,input().split())
    result.append([a,b])
    
result.sort()
    
for r in result:
    print(r[0],r[1])
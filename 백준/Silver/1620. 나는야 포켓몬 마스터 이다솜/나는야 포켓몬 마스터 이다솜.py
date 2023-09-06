import sys
input = sys.stdin.readline

M,N = map(int,input().split())

poke = {}

for i in range(1,M+1):
    
    name = input().rstrip()
    
    poke[str(i)] = name
    poke[name] = str(i)
    
for j in range(N):
    print(poke[input().rstrip()])
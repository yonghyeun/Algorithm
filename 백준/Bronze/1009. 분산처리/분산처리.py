N = int(input())

for _ in range(N):
    a,b = map(int,input().split())
    
    num = [str(a**i).zfill(2)[-2:] for i in range(1,4 + 1)]
    
    comp = int(num[b%4 -1]) % 10
    
    if comp == 0:
        print(10)
    else:
        print(comp)
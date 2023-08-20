a,b = map(int,input().split())

result = []
for i in range(1,a + 1):
    if not a % i:
        result.append(i)
        
if len(result) > b - 1:
    print(result[b -1])
else:
    print(0)
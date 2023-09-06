cnt = 1
N = int(input())

while N > cnt:
    if N >= cnt:
        N -= cnt
        cnt += 1
 

a = list(range(1,cnt + 1))
b = list(range(cnt,0,-1))

if not cnt % 2: 
    print(str(a[N-1]) + '/' + str(b[N-1]))
else:
    print(str(b[N-1]) + '/' + str(a[N-1]))
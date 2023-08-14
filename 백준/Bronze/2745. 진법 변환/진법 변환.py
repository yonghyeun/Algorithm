number = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

B,N = input().split()
N = int(N)
B = ''.join(reversed(B))

print(
    sum([N ** i * number.index(B[i]) for i in range(len(B))])
)
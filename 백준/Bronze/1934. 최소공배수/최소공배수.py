def gcd(A : int , B : int) -> int:
    # A > B인 상황 
    while True:
        mod = A % B
        if not mod:
            break
        A = B
        B = mod
    return B

T = int(input())

for _ in range(T):
    B,A  = sorted(map(int,input().split()))

    print(A * B // gcd(A,B))
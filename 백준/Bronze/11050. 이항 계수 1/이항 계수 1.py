N,K = map(int,input().split())

N_f = 1
K_f = 1
N_minus_k_f = 1 
for i in range(1,N+1):
    N_f *= i
for j in range(1,K+1):
    K_f *= j
for m in range(1,N-K+1):
    N_minus_k_f *= m 
    
print(
    int(N_f / (K_f * N_minus_k_f))
)
def eratostenes(n: int) -> list[int]:

    prime = [True] * (n + 1) # 0~n 까지의 소수 목록
    prime[0]  = prime[1] =  False # 0과 1은 소수가 아님 

    for num in range(2, n + 1):
        if prime[num] == True: # num 번째 값이 소수라면
            for t in range(num * num , n + 1 , num):
                prime[t] = False # num 의 배수들은 소수가 아님 
    
    return prime

# 시간초과를 어떻게 해결할까 ? 

def test(prime : list[bool]) -> int:
    T = int(input())
    for _ in range(T):
        N = int(input())
        cnt = 0
        for n in range(2, N // 2 + 1):
            if prime[n] and prime[N-n]:
                cnt += 1
        print(cnt)

test(eratostenes(1000000))
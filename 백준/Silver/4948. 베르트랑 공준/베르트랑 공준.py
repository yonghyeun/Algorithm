def sosu(x):
    
    prime_bool = [False,False] + [True] * (x-1) # x 까지 소수 boolean 생성
                #  0, 1 소수 아님 , 2는 소수 , 나머지는 나중에 바꿔줄거
                
    end = int(x ** 0.5) + 1 
    
    for i in range(1, end):
        if prime_bool[i] == True:
            for j in range(i + i , x + 1 , i):
                prime_bool[j] = False
    return sum(prime_bool)

while True:
    n = int(input())
    
    if n == 0:
        break
    
    n_2 = 2 * n 
    print(sosu(n_2) - sosu(n))
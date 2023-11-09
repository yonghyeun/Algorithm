def is_prime(num : int) -> bool:
    if num < 2:
        return False
    if num == 2 or num == 3 or num == 5 or num == 7:
        return True 
    for d in [2,3,5,7]:
        if num % d == 0:
            return False
    return True

T = int(input())

for _ in range(T):
    num = int(input())
    while True:
        prime = is_prime(num)
        if prime:
            print(num)
            break
        num += 1
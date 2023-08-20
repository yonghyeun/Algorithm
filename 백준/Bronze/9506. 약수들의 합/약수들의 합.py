while True:
    num = int(input())
    
    if num < 0:
        break
    
    result = [num // i for i in range(num + 1,1,-1) if not num % i]
    if num == sum(result):    
        r = f'{num} = '

        for i,s in enumerate(result):
            if i != len(result) -1:
                r += f'{s} + '
            else:
                r += str(s)
        print(r)
    else:
        print(f'{num} is NOT perfect.')
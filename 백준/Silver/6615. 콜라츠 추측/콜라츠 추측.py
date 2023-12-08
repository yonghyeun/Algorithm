import sys
 
while True:
    x, y = map(int, sys.stdin.readline().strip().split())
 
    if x == 0 and y == 0:
        break
 
    temp = x
    a = [-1, x]
    while True:
        if temp == 1:
            break
 
        if temp % 2:
            temp = 3 * temp + 1
            a.append(temp)
        else:
            temp //= 2
            a.append(temp)
 
 
    temp = y
    b = [-2, y]
    while True:
        if temp == 1:
            break
 
        if temp % 2:
            temp = 3 * temp + 1
            b.append(temp)
        else:
            temp //= 2
            b.append(temp)
 
    for i in range(-1, -1000000000, -1):
        if a[i] != b[i]:
            break
 
    # i += 1
    print(f'{x} needs {len(a) + i} steps, {y} needs {len(b) + i} steps, they meet at {a[i + 1]}')

N = int(input())

last = N + 2 

for i in range(last ):
    
    if i == 0 or i+1 == last:
        print('@'* (N + 2))
    else:
        print('@' + ' '* N + '@')
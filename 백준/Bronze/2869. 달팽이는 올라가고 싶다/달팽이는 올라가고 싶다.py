A,B,V = map(int,input().split())

if V - A <= 0:
    last = 1
else:
        
    if (V - A) % (A-B) != 0:
        last = (V -A) // (A-B) + 2
    else:
        last = (V-A) // (A-B) + 1


print(last)    
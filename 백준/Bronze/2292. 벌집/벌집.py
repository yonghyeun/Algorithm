floor,i = 1,1
N = int(input())

while N > i:
    i += 6 * floor
    floor += 1

print(floor)
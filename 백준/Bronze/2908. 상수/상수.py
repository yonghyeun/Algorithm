A,B = input().split()

number = [int(s[::-1])for s in [A,B]]

print(max(number))
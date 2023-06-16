stud = set(list(range(1,31)))
g = set([int(input()) for _ in range(28)])

answer = list(stud - g)

print(min(answer))
print(max(answer))


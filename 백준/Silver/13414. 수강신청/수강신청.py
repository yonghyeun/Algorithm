import sys
input = sys.stdin.readline

k, l = map(int, input().split())
s = dict()

for i in range(l):
    student = input().strip()
    if student in s.keys():
        del s[student]
        s[student] = 1

    if student not in s.keys():
        s[student] = 1
s = list(s.keys())
for i in range(k):
    try:
        print(s[i])
    except:
        pass
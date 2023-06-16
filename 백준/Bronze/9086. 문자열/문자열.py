for i in range(int(input())):
    s = input()
    if len(s) != 0:
        print(s[0] + s[-1])
    else:
        print(s[0]+s[0])
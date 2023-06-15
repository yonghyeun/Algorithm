N = int(input())
answer = []
for _ in range(N):
    S = input().split()
    i,s = int(S[0]),S[1]
    
    string = ''
    
    for z in s:
        string += i * z
    answer.append(string)
        
for b in range(N):
    print(answer[b])
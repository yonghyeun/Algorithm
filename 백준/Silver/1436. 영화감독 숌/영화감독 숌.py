N = int(input())

cnt = 1 
name = 666 # 첫 번째 영화 제목
while cnt != N:
    name += 1 
    if '666' in str(name):
        cnt += 1
    
print(name)
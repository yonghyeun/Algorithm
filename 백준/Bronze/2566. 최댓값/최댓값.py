max_value = []
location = []

for i in range(9):

    arr = list(map(int,input().split()))
    

    max_value.append(max(arr))
    location.append((i + 1,arr.index(max(arr)) + 1))
    
max_index = max_value.index(max(max_value))

print(max(max_value))
print(* location[max_index])
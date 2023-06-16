my_dict = {}
my_dict['ABC'] = 3
my_dict['DEF'] = 4
my_dict['GHI'] = 5
my_dict['JKL'] = 6
my_dict['MNO'] = 7
my_dict['PQRS'] = 8
my_dict['TUV'] = 9
my_dict['WXYZ'] = 10


abc = list(my_dict.keys())
arr = list(input())

count = 0
for word in abc:
    for s in arr:
        if s in word:
            count += my_dict[word]    
print(count)
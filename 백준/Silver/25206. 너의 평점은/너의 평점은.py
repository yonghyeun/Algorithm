table = {
    'A+':4.5,
    'A0':4.0,
    'B+':3.5,
    'B0':3.0,
    'C+':2.5,
    'C0':2.0,
    'D+':1.5,
    'D0':1.0,
    'F':0.0,
    'P':'pass'
}

total_score = 0
total_grade = 0
for i in range(20):
    
    _,s,g = input().split()
    s,g = float(s),table[g]
    
    
    if g == 'pass':
        continue
    else:
        total_score += s
        total_grade += g * s
        
    
print(total_grade/total_score )
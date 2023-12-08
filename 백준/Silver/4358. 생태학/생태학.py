import sys
input = sys.stdin.readline    
tree_dic = {}
total_cnt = 0
tree = []

while True:
    cur = input().strip()
    if not cur:   
        break       
    total_cnt += 1
    if tree_dic.get(cur):
        tree_dic[cur] += 1
    else:
        tree_dic[cur] = 1
        tree.append(cur)
tree.sort()
for i in tree:
    print(f'{i} {100*tree_dic[i]/total_cnt:.4f}')
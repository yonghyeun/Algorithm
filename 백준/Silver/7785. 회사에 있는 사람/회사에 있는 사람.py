M = int(input())
hash = {}

for _ in range(M):
  name , cond = input().split()
  if cond == 'enter':
    hash[name] = True
  else:
    hash[name] = False


working_man = sorted([name for name , cond in hash.items() if cond], reverse = True)

for man in working_man:
  print(man)
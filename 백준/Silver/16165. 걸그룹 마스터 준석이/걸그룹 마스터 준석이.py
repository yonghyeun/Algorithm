N , M = map(int ,input().split())

table_1 = {}
table_2 = {}
for _ in range(N):
  team = input()
  num_members = int(input())
  members = []
  for i in range(num_members):
    mem = input()
    table_2[mem] = team
    members.append(mem)
  table_1[team] = sorted(members)

for _ in range(M):
  q = input()
  type = int(input())
  if type == 1:
    print(table_2[q])
  else:
    members = table_1[q]
    for m in members:
      print(m)
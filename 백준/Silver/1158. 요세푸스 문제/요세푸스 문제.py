class Node:
    
    def __init__(self,key):
        self.key = key 
        self.next = None
        self.prev = None
        
N,k = map(int,input().split())

if N < 2:
    print('<1>')
else:

    humans = [Node(i) for i in range(N)]

    # 첫 번째 사람과 마지막 사람을 제외하고 앞 사람과 뒷 사람 연결시켜주기
    for i in range(1, N-1):
        humans[i].next = humans[i + 1]
        humans[i].prev = humans[i - 1]

    # 첫 번째 사람과 마지막 사람 연결시켜주기 

    humans[0].next = humans[1]
    humans[0].prev = humans[-1]
    humans[-1].next = humans[0]
    humans[-1].prev = humans[-2]   

    result = []
    target = humans[0] 

    while len(result) < N:
        
        for _ in range(k-1): # 2번의 이동을 거쳐야 함
            target = target.next
        result.append(str(target.key + 1)) # 죽을 사람 죽여 ~~ 0번째부터 사람부터 시작하니 + 1
        target.prev.next = target.next 
        target.next.prev = target.prev 
        
        target = target.next # 죽었으니 그 사람 빼고 시작하자고 
        
    print('<' + ', '.join(result)+'>')
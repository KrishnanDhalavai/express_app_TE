stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
count = 0

med = [stones[0][0], stones[0][1]]
for i, j  in stones[1:]:
    if i in med:
        count += 1
        med = [i, j]
    elif j in med:
        count += 1
        med = [i, j]
print(count)
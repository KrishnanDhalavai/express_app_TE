# n = 7
# if n <= 0:
#     print(n)
# def fact(n):
#     if n <= 1:
#         return n
#     return n * fact((n - 1))
# print(fact(n))


# points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
# for i, j in points:
#     print(i, j)

# tokens = ["2","1","+","3","*"]
# for i in tokens:
#     if i == "+":
#         tokens.pop()
#         try:
#             num1 = int(tokens.pop())
#             num2 = int(tokens.pop())
#         except Exception as e:
#             print(e)
#         res = num1 + num2
#         tokens.append(res)
#     if i == "-":
#         tokens.pop()
#         try:
#             num1 = int(tokens.pop())
#             num2 = int(tokens.pop())
#         except exception as e:
#             print(e)
#         res = num1 - num2
#         tokens.append(res)
#     if i == "*":
#         tokens.pop()
#         try:
#             num1 = int(tokens.pop())
#             num2 = int(tokens.pop())
#         except Exception as e:
#             print(e)
#         res = num1 * num2
#         tokens.append(res)
# print(int(tokens))
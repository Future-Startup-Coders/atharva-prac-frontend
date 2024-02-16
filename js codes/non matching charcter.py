str="atharva"

l=[]



for i in range(len(str)):
    l.append(str[i])
print(l)

for i in range(len(l)):
    count=1
for j in range(len(l)):
    if i!=j and l[i]==l[j]:
        count+=1
        print(l[i], count)


l=dict(l)
print(l)

dic={}


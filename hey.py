x="I like novels"
y = x.split()
start = 0
end = len(y)-1
while (start<end):
    y[start],y[end]=y[end],y[start]
    start+-1
    end-=1
string = " "
print(string.join(y))


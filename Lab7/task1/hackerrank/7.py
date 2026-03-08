s=input()
sub=input()
c=0
for i in range(len(s)-len(sub)+1):
 if s[i:i+len(sub)]==sub:
   c+=1
print(c)
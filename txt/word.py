f = open("german.dic", "r")
g = open("words.txt", "w")
lines = f.readlines()
for line in lines:
    if len(line) == 28:
        g.write(line)
'''
esset = "ß"
print(len(esset))
'''

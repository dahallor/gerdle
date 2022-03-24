'''
f = open("german.dic", "r")
g = open("words.txt", "w")
lines = f.readlines()
for line in lines:
    if len(line) == 28:
        g.write(line)

esset = "ß"
print(len(esset))
'''

f = open("words.txt", "r")
g = open("word_formatted.txt", "w")
lines = f.readlines()
array = []
for line in lines:
    array.append(line)

array2 = []
for i in range(len(array)):
    array2.append(array[i].strip('\n'))
g.write("[")
for i in range(len(array2)):
    g.write("\"" + array2[i] + "\"" + "," + "\n")
g.write("]")

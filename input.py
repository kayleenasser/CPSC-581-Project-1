import json

path = 'src\data.json'
book = {}
entry = {}
stats = ['fact','opinion','percent','image']

print('welcome kaylee data inputter!')
while True:
    book = {}
    item = input('Enter item: ')
    if item == '':
        command = input('Close data editor? (Y/N): ')
        if (command.lower() == 'y' or command.lower()=='yes'):
            break
    for stat in stats:
        answer = input('Enter '+ stat +': ')
        if stat == 'image':
            answer = r"../assets/" +answer+'.png'
        entry.update({stat:answer})
    book.update({item:entry})
    with open(path, 'r') as infile:
        try:
            old = json.load(infile)
        except:
            continue
        book.update(old)
    
    with open(path,"w") as f:
        json.dump(book,f)


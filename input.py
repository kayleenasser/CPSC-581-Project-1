import json

path = 'src\data.json'
book = {}
entry = {}
stats = ['fact','opinion','percent','image']

def editdata():
    print('edit kaylees data')
    while True:
        item = input('Enter item: ')
        if item == '':
            command = input('Close data editor? (Y/N): ')
            if (command.lower() == 'y' or command.lower()=='yes'):
                break
        elif item in book:
            print('Entry found: ', item)
            for each in book[item]:
                print(each, ':', book[item][each])
            request = input('edit? (y/n) ')
            if(request.lower() == 'n' or request.lower() == 'no'):
                continue
            else:
                for stat in stats:
                    answer = input('Enter '+ stat +': ')
                    entry.update({stat:answer})
                book.update({item:entry})
                continue
        elif item not in book:
            for stat in stats:
                answer = input('Enter '+ stat +': ')
                entry.update({stat:answer})
            book.update({item:entry})
            print({item:entry})

action = ''
print('welcome kaylee data inputter!')
with open(path,"r") as f:
    book = f.read()
book = json.loads(book)

editdata()

with open(path,"w") as f:
    json.dump(book,f)

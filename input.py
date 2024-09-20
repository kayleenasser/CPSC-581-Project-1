import json

path = 'src\data.json'
book = {}
entry = {}
stats = ['fact','opinion','percent','image']

def editdata():
    print('edit kaylees data')
    while True:
        item = input('Enter item: ')
        if item =='':
            command = input('Close data editor? (Y/N): ')
            if (command.lower() == 'y' or command.lower()=='yes'):
                break
        elif item not in book:
            for each in stats:
                answer = input('Enter '+each+': ')
                entry.update({each:answer})
                book.update({item:entry})
        elif item in book:
            print('Entry found: ', item)
            for each in book[item]:
                print(each, ':', book[item][each])
            request = input('edit? (y/n) ')
            if(request.lower() == 'n' or request.lower() == 'no'):
                continue
            else:
                for each in stats:
                    answer = input('Enter '+each+': ')
                    entry.update({each:answer})
                book.update({item:entry})
                continue

action = ''
print('welcome kaylee data inputter!')
with open(path,"r") as f:
    book = f.read()
book = json.loads(book)

editdata()

with open(path,"w") as f:
    json.dump(book,f)

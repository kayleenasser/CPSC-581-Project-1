import pandas as pd
import pickle

#outPath = r'D:\Podcasts\dndBook.pkl'

book = {}
entry = {}
stats = ['type','page','alignment','ac','hp','speed','skills','senses','languages','challenge','specials','actions','str','dex','con','int','wis','cha']
statblock = ['str','dex','con','int','wis','cha']

format = r'\begin{tcolorbox}[colback=green!5!white,colframe=green!50!black,colbacktitle=green!55!black,title=%s (%s)]\tbf{Type} %s\\\tbf{Alignment} %s\\\tbf{Armour Class} %s\\\tbf{Hit Points} %s\\\tbf{Speed} %s\\\tbf{Skills} %s\\\tbf{Senses} %s\\\tbf{Languages} %s\\\tbf{Challenge} %s\\\\%s\tcblower %s\\ \\\\\stats{%s}{%s}{%s}{%s}{%s}{%s}\end{tcolorbox}'

def creatureBook():
    print('Creature Lookup')
    while True:
        creature = input('Enter creature: ')
        if creature =='':
            command = input('Close Creature Manual? (Y/N): ')
            if (command.lower() == 'y' or command.lower()=='yes'):
                break
        elif creature not in book:
            for each in stats:
                answer = input('Enter '+each+': ')
                if each in statblock and answer.isdigit():
                    answer = int(answer)
                    if answer >= 10:
                        modifier = (answer - 10) // 2
                        answer = str(answer) + ' (+' + modifier + ')'
                    else:
                        modifier = (answer - 10) // -2
                        answer = str(answer) + ' (-' + modifier + ')'
                entry.update({each:answer})
            book.update({creature:entry})
        elif creature in book:
            print('Entry found: ', creature)
            while True:
                request = input('View (V), pickle (P), edit (E), or generate LaTeX stat block (L) ')
                if(request.lower() == 'l' or request.lower() == 'latex'):
                    requested = []
                    for each in book[creature]:
                        requested.append(book[creature][each])
                    print(format % (creature, *requested))

                elif(request.lower() == 'v' or request.lower() == 'view'):
                    print(creature)
                    for each in book[creature]:
                        print(each, ':',book[creature][each])

                elif(request.lower() == 'e' or request.lower() == 'edit'):
                    print(creature)
                    for each in stats:
                        answer = input('Enter '+each+': ')
                        entry.update({each:answer})
                    book.update({creature:entry})

                elif(request.lower() == 'p' or request.lower() == 'pickle'):
                    print(book[creature])

                else:
                    request = input('Select new creature? (Y/N): ')
                    if request.lower()=='y' or request.lower()=='yes':
                        break

action = ''
print('welcome to the dm book!')
while action.lower()!='Q':
    action = input('Creature Book (C), Help (H), Quit (Q)')
    if (action.lower() == 'c' or 'creature' in action.lower()):
        creatureBook()
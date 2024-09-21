import json

path = 'src/data.json'
stats = ['fact', 'opinion', 'percent', 'image']

print('Welcome to Kaylee data inputter!')

while True:
    entry = {}
    item = input('Enter item: ')
    
    if item == '':
        command = input('Close data editor? (Y/N): ')
        if command.lower() == 'y' or command.lower() == 'yes':
            break
    
    entry['name'] = item 
    for stat in stats:
        answer = input(f'Enter {stat}: ')
        if stat == 'image':
            answer = f"../assets/{answer}.png"  
        entry[stat] = answer
    
    with open(path, 'r') as infile:
        try:
            old_data = json.load(infile)  
        except json.JSONDecodeError:
            old_data = []  

    old_data.append(entry)
    
    with open(path, 'w') as f:
        json.dump(old_data, f, indent=4)  

print('Data entry completed!')

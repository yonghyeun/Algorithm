def deepcopy(obj):
  
  if obj == None or type(obj) != list or type(obj) != dict:
    return obj 
  
  if type(obj) == list:
    new_arr = []
    for i in range(len(obj)):
      new_arr.append(deepcopy(obj))
    return new_arr
  
  if type(obj) == dict:
    new_obj = {}

    for key in obj.keys:
      new_obj[key] = deepcopy(obj)
    return new_obj
  

originalObject = {
  'name': 'John',
  'age': 30,
  'address': {
    'city': 'New York',
    'country': 'USA',
  },
  'hobbies': ['reading', 'traveling'],
}


copied = deepcopy(originalObject)

print(copied)
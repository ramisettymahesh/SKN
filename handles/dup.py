import hashlib
import PIL
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import time
import numpy as np

def file_hash(filepath):
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()
    
import os
os.getcwd()

os.chdir('E:/PROJ-12/train')
os.getcwd()

file_list = os.listdir()
print(len(file_list))

import hashlib, os

duplicates = []
hash_keys = dict()
for index, filename in  enumerate(os.listdir('.')): 
    if os.path.isfile(filename):
        with open(filename, 'rb') as f:
            filehash = hashlib.md5(f.read()).hexdigest()
        if filehash not in hash_keys:
            hash_keys[filehash] = index
        else:
            duplicates.append((index,hash_keys[filehash]))

print("DUPLOCATES :--- ",duplicates)
for index in duplicates:
    os.remove(file_list[index[0]])
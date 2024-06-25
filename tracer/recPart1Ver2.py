import face_recognition 
import numpy as np
import pickle
import cv2
import os

def findEncodings(image):
    face_encodings = face_recognition.face_encodings(image)
    if face_encodings:
        encode = face_encodings[0]
    return encode

#------------------------------------------
uniCode = 23                            
imagename = "K Mohamed.jpeg"
year = 1
folder = os.path.dirname(os.path.abspath(__file__))
output_directory = os.path.join(folder,"path image")
output_directory = os.path.join(output_directory , str(year))
imagePath = os.path.join(output_directory,imagename)
print(imagePath)
#------------------------------------------

image = cv2.imread(imagePath)
encode = findEncodings(image)

encodingPath = os.path.join(folder, "encodings1.pkl")
namesPath = os.path.join(folder, "names1.pkl")

if not os.path.isfile(encodingPath):
    encodes = [encode]
    with open(encodingPath,"wb") as file:
        pickle.dump(encodes,file)
else:
    with open(encodingPath,"rb") as file:
        encodes = pickle.load(file)
        encodes.append(encode)
    with open(encodingPath,"wb") as file:
        pickle.dump(encodes,file)

if not os.path.isfile(namesPath):
    uniCodes = [uniCode]
    with open(namesPath,"wb") as file:
        pickle.dump(uniCodes,file)
else:
    with open(namesPath,"rb") as file:
        uniCodes = pickle.load(file)
        uniCodes.append(uniCode)
    with open(namesPath,"wb") as file:
        pickle.dump(uniCodes,file)

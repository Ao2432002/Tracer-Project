import face_recognition 
import numpy as np
import pickle
import cv2
import os

def findEncodingsPart2(imm):
    encodingList = []
    for i in imm:
        face_encodings = face_recognition.face_encodings(i)
        if face_encodings:
            encode = face_encodings[0]
            encodingList.append(encode)
    return encodingList

def findImages(imagesList,path):
    fImage = []
    fClassNames = []
    for cl in imagesList:
        curImg = cv2.imread(f'{path}//{cl}')
        fImage.append(curImg)
        fClassNames.append(os.path.splitext(cl)[0])
    return fClassNames,fImage

def markAttendance(unicode):
    
    print(unicode)

def takeAttend(encodelist, databaseEncodings):
     for enc in encodelist:
         matches = face_recognition.compare_faces(databaseEncodings,enc)
         faceDis = face_recognition.face_distance(databaseEncodings,enc)
         matchIndex = np.argmin(faceDis)
         if matches[matchIndex]:
             unicode = classNames[matchIndex]
             markAttendance(unicode)



subject = "IS50"
folder = os.path.dirname(os.path.abspath(__file__))
output_directory = os.path.join(folder, "cropped")
subject_folder = os.path.join(output_directory,subject)

encodingPath = os.path.join(folder, "encodings1.pkl")
namesPath = os.path.join(folder, "names1.pkl")

with open(encodingPath,"rb") as file:
    databaseEncodings = pickle.load(file)
with open(namesPath,"rb") as file:
    classNames = pickle.load(file)

croppedImagesList = os.listdir(subject_folder)
_ , croppedImages = findImages(croppedImagesList,subject_folder)

encodelist = findEncodingsPart2(croppedImages)
takeAttend(encodelist,databaseEncodings)
import os
import time
import shutil
import itertools
import cv2
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Activation, Dropout, BatchNormalization
from tensorflow.keras.models import Model, load_model, Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split
from tensorflow.keras.optimizers import Adam, Adamax
from tensorflow.keras import regularizers
from tensorflow.keras.metrics import categorical_crossentropy



class CustomCNNModel:
    def __init__(self, input_shape=(28, 28, 3), num_classes=7, learning_rate=0.001):
        self.input_shape = input_shape
        self.num_classes = num_classes
        self.learning_rate = learning_rate
        self.model = self._build_model()

    def _build_model(self):
        model = Sequential()
        model.add(Input(shape=self.input_shape))

        model.add(Conv2D(32, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(MaxPooling2D())
        model.add(BatchNormalization())

        model.add(Conv2D(64, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(Conv2D(64, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(MaxPooling2D())
        model.add(BatchNormalization())


        model.add(Conv2D(128, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(Conv2D(128, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(MaxPooling2D())
        model.add(BatchNormalization())

        model.add(Conv2D(256, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(Conv2D(256, (3, 3), activation='relu', padding='same', kernel_initializer='he_normal'))
        model.add(MaxPooling2D())


        model.add(Flatten())
        model.add(Dropout(rate=0.2))
        model.add(Dense(256, activation='relu', kernel_initializer='he_normal'))
        model.add(BatchNormalization())

        model.add(Dense(128, activation='relu', kernel_initializer='he_normal'))
        model.add(BatchNormalization())

        model.add(Dense(64, activation='relu', kernel_initializer='he_normal'))
        model.add(BatchNormalization())

        model.add(Dense(32, activation='relu', kernel_initializer='he_normal', kernel_regularizer=L1L2()))
        model.add(BatchNormalization())

        model.add(Dense(self.num_classes, activation='softmax', kernel_initializer='glorot_uniform', name='classifier'))

        model.compile(optimizer=Adamax(learning_rate=self.learning_rate),
                      loss='categorical_crossentropy',
                      metrics=['accuracy'])
        return model

    def summary(self):
        return self.model.summary()

    def get_model(self):
        return self.model
    


c = CustomCNNModel()
model = c.get_model()

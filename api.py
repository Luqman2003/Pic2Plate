from flask import Flask, request, jsonify
from keras.models import load_model
from keras.preprocessing.image import load_img, img_to_array
import numpy as np
import tensorflow_datasets as tfds


(train_data,test_data),df_info = tfds.load('food101',
                                           split=['train','validation'], # in our case we have training and validation but some dataset have testing too
                                           shuffle_files=True, # we are shuffle our files to some randomness in our data
                                           as_supervised=True, # beacuse our dataset is supervised
                                           with_info=True) # getting metadata about our dataset

food_categories = df_info.features['label'].names



ingredients_dict = {}
with open('./ingredients_data/Ingredients101/Annotations/ingredients.txt', 'r') as f:
    for food_category, line in zip(food_categories, f):
        ingredients = line.strip().split(',')
        ingredients_dict[food_category] = ingredients


# Load your trained model
model = load_model(r'C:\Users\Luqman\Summer-2023-ML-Project\model')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']  # Get the image file sent in the POST request
    image = load_img(file.stream, target_size=(224, 224))  # Load and resize the image using Keras
    image = img_to_array(image)  # Convert the image to a numpy array
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))  # Reshape the image
    image = image / 255.0  # Rescale pixel values

    # Make a prediction using the model
    predictions = model.predict(image)
    predicted_class = np.argmax(predictions)

    # Get the ingredient list for the predicted class
    ingredients = ingredients_dict[predicted_class]

    # Return the prediction and the ingredient list
    return jsonify({'prediction': int(predicted_class), 'ingredients': ingredients})

if __name__ == '__main__':
    app.run(port=5000, debug=True)

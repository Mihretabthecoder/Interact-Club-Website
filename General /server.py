from flask import Flask, jsonify, request
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS to allow cross-origin requests
CORS(app)

# Home route that returns a simple message
@app.route('/')
def home():
    return "Welcome to the Dorm Fix App!"

# Sign up route to handle user registration
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()  # Get the JSON data from the request
    print("User Data:", data)  # Print the data to check if it's received
    # Save user data to a file or database here (for now, we're just printing it)
    return jsonify({"message": "Signup successful!"}), 200

# Run the app on port 5000
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

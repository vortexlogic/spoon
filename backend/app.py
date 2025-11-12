from flask import Flask, jsonify
from flask_cors import CORS
import time
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (adjust as needed for production)

@app.route('/api/quick-demo', methods=['GET'])
def quick_demo():
    """
    A quick demo endpoint that simulates a long-running process.
    Returns a random number after a short delay.
    """
    time.sleep(1)  # Simulate a delay
    random_number = random.randint(1, 100)
    return jsonify({'result': random_number, 'message': 'Demo complete!'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
# imports
from flask import Flask, render_template, request, redirect
import requests # for connecting to api

# configure app
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('home.html')
    difficulty = request.form.get('difficulty')
    if not difficulty:
        difficulty = 1
    else:
        difficulty = int(difficulty)
    if difficulty > 3:
        difficulty = 3
    elif difficulty < 1:
        difficulty = 1

    return render_template('question.html', difficulty=difficulty)

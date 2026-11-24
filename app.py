# imports
from flask import Flask, render_template, request, redirect
import requests # for connecting to api

# configure app
app = Flask(__name__)

@app.route('/')
def index():
    response = requests.get('https://anyguesser.com/api/v1/categories/12th-grade?questions=true&answers=true')
    response_dict = response.json()
    questions = response_dict['questions']
    if len(questions) < 1:
        return 'no questions'
    return render_template('question.html', questions=questions)

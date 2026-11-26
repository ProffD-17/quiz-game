# imports
from flask import Flask, render_template, request, redirect
import requests # for connecting to api

# configure app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')


# quiz of random questions of select difficulty
@app.route('/random_question')
def random_question():
    difficulty = request.args.get('difficulty')
    if not difficulty:
        difficulty = 1
    else:
        difficulty = int(difficulty)
    if difficulty > 3:
        difficulty = 3
    elif difficulty < 1:
        difficulty = 1

    return render_template('random_question.html', difficulty=difficulty)


@app.route('/question_by_group')
def question_by_group():
    group_name = request.args.get('group')
    return render_template('question_by_group.html', group_name=group_name)

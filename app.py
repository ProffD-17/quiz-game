# imports
from flask import Flask, render_template, request, redirect
import requests # for connecting to api

# configure app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('question.html')

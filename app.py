# imports
from flask import Flask, render_template, request, redirect

# configure app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')
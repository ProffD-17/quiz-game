# imports
from flask import Flask, render_template, request, redirect
import requests # for connecting to api

# configure app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('categories.html')

# input with autocomplete of all categories starting with the search
@app.route('/categories')
def search_category():
    search = request.args.get('q')
    if search:
        categories = requests.get('https://anyguesser.com/api/v1/categories')
        categories_dict = categories.json()
        simmilar_categories = []
        for category in categories_dict['categories']:
            if category['name'].startswith(search):
                simmilar_categories.append(category['name'])
    else:
        simmilar_categories = []
        
    return simmilar_categories
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World from Donovan Wayman!'

@app.route('/about')
def hello_about():  # put application's code here
    return render_template("about.html")

@app.route('/hello')
def hello():  # put application's code here
    return render_template("hello.html")

@app.route('/about-css')
def hello():  # put application's code here
    return render_template("about-css.html")

if __name__ == '__main__':
    app.run()

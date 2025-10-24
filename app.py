from flask import Flask, request, render_template

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
def about_css():  # put application's code here
    return render_template("about-css.html")

@app.route('/greeting')
def greets():  # put application's code here
    return render_template("greeting.html")




from flask import Flask, request, render_template


@app.route('/favorite-course', methods=['GET'])
def yuh():
    first_course = request.args.get('first_favorite_course')
    second_course = request.args.get('second_favorite_course')

    if first_course and second_course:
        return f"Thanks! Your favorite classes are: {first_course} and {second_course}"

    return render_template('favorite-course.html')


@app.route('/complete', methods=['GET'])
def complete():
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    email = request.args.get('Email')
    password = request.args.get('Password')

    return f"""Thank you for completing the form!
    <br><br>First Name: {first_name}
    <br>Last Name: {last_name}
    <br>Email: {email}
    <br>Password: {password}"""


@app.route('/contact', methods=['GET'])
def contact():
    first_name = request.args.get('first_name')

    if first_name:  # Form was submitted
        # Get all the form data
        last_name = request.args.get('last_name')
        email = request.args.get('Email')
        password = request.args.get('Password')
        
        # Return a response with the submitted data
        return f"Thanks for contacting us, {first_name} {last_name}! We'll reach out to {email} soon."
    
    return render_template("contact.html")


if __name__ == '__main__':

    app.run()

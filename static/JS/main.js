//Logging the project
console.log('My first javScript project');
//Lines break that can be referenced
const linebreak = document.createElement('br');


//changes the text of a button when pressed//
const paragraphOne = document.createElement('p');
paragraphOne.id = 'id_1p';
paragraphOne.textContent = 'What kind of tree fits in your hand?'

const button = document.createElement('button');
button.id = 'id_1b';
button.textContent = 'Click me';
button.addEventListener('click', () => {
    paragraphOne.textContent = 'A palm tree ;) ';
});

//adds the paragraph and button to the body of the page//
document.body.appendChild(paragraphOne);

document.body.appendChild(button);

//Breaks the page up
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

//asks a user of what their name and then you click the submit
// Create a label
const nameLabel = document.createElement("label");
nameLabel.textContent = "Please enter your name: ";
document.body.appendChild(nameLabel);


// Create an input box
const input = document.createElement("input");
input.type = "text";
input.id = "nameInput";
document.body.appendChild(input);


// Create a button
const button2 = document.createElement("button");
button2.id = 'id_2b';
button2.textContent = "Submit";
document.body.appendChild(button2);

// Create a paragraph to show the greeting
const greeting = document.createElement("p");
greeting.id = "greets"
document.body.appendChild(greeting);

// When button is clicked, show greeting
button2.addEventListener("click", function() {
    const name = input.value;
    const greeting = document.getElementById("greets");
    greeting.textContent = "Hello, " + name + "!";
});

// Optional: allow pressing Enter to submit
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const name = input.value;
    greeting.textContent = "Hello, " + name + "!";
  }
});


//Describes my favourite foods
let donovanFavFoods = ['pizza', 'burger', 'ice-cream', 'calamari'];

document.write('<b>My favourite foods are...</b><br>');

for (let foods in donovanFavFoods) {
    document.write(donovanFavFoods[foods] + "<br>");
}


document.body.appendChild(document.createElement('br'));

let businessOptions = ['BMGT 408C', 'BMGT 394H', 'BMGT390', 'BMGT190', 'BMGT490'];

const container = document.createElement('div');
document.body.appendChild(container);

const classesLabel = document.createElement('label');
classesLabel.textContent = 'What QUEST classes have you taken: ';
container.appendChild(classesLabel);

container.appendChild(document.createElement('br'));

businessOptions.forEach(option => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'business-class';  // Fixed: className, not classname
    checkbox.value = option;
    checkbox.id = option;

    const optionLabel = document.createElement('label');
    optionLabel.textContent = option;
    optionLabel.htmlFor = option;

    container.appendChild(checkbox);
    container.appendChild(optionLabel);
    container.appendChild(document.createElement('br'));
});

// Create submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.id = 'submit';
container.appendChild(submitButton);

function typeOfBusiness() {
    let checkboxes = document.querySelectorAll('input.business-class');  // Fixed: matches className
    let typeOfBusiness = '';
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            typeOfBusiness += checkbox.value + ' ';
        }
    }
    alert('QUEST Classes taken: ' + typeOfBusiness.trim());
}

document.getElementById('submit').addEventListener('click', typeOfBusiness);








//Bootstrap
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
document.head.appendChild(css);

const js = document.createElement('script');
js.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
js.defer = true;
document.body.appendChild(js);

const btn = document.createElement('button');
btn.textContent = 'You have been doing well, here are some words of encouragement...!';
btn.className = 'btn btn-primary m-3';
document.body.appendChild(btn);

const alertSpot = document.createElement('div');
document.body.appendChild(alertSpot);

btn.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show';
    alert.role = 'alert';
    alert.innerHTML = `
        keep going...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertSpot.appendChild(alert);
});
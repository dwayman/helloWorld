/*
let person = {
    name: 'Donovan',
    age: 30,
};
//Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary';

console.log(person.name);*/





/*let selectedColors = ['red', 'blue'];
selectedColors[1] ='green'
console.log(selectedColors.length);*/


document.write('Hello World<br>');

let name = prompt('What is your name? (Only Alice or Bob will get a greeting.)');
if (name == 'Alice' || name == 'Bob')
    document.write('Hello' + " " + name);



let n = prompt('number')
n = parseInt(n)

let userList = []
for (let i = 0; i <= n; i++) {
    userList.push(i);
}

let sum = 0;
for (let i = 0; i < userList.length; i++) {
    sum += userList[i];
}

document.write(sum);





function findLargest(list) {
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

let numbers = [3,7,2,9,1,5];
let max = findLargest(numbers);
document.write('The largest element is: ' + max);
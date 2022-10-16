/*
    creat a function that reverses a string:
    Input: 'Hi My name is Arslaan'
    Output: 'naalsrA si eman yM iH'
*/
function checkString(str) {
    if(!str || typeof str !== 'string')
        return false;
    return true;
}

function reverse(str) {

    if(!checkString(str))
        return 'Invalid input "' + str + '"';

    const backward = [];
    let end = str.length - 1;

    let steps = 0;

    for (let i = end; i >= 0; i--) {
        backward.push(str[i]);
        steps++;
    }

    console.log(steps);
    return backward.join("");
}

// cleaner way of reverse()
function reverseNew(str) {
    return str.split('').reverse().join('');
}

// using ES6 syntax
const reverseEs6 = str => str.split('').reverse().join('');
const reverseEs6Spread = str => [...str].reverse().join('');

function reverse2(str) {

    if(!checkString(str))
        return 'Invalid input "' + str + '"';

    let start = 0;
    let end = str.length - 1;

    const str_arr = str.split("");
    let steps = 0;

    while (start < end) {
        temp = str_arr[start];
        str_arr[start] = str_arr[end];
        str_arr[end] = temp;

        start++;
        end--;
        steps++;
    }
    console.log(steps);
    return str_arr.join("");
}

const s = "a";
const st = "Hey My name is Arslaan";
let t = ['hi'];

// console.log(s);
console.log('loop: ',reverse(st));
console.log('clean: ',reverseNew(st));
console.log('cleaner: ',reverseEs6(st));
console.log('spread operator: ',reverseEs6Spread(st));
console.log('optimised: ',reverse2(st));

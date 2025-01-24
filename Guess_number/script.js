const x = Math.floor(Math.random() * 10 + 1);
const input = document.getElementById('guess');
const array = document.getElementById('array');
const chances = document.getElementById('chances');
const guessbtn = document.getElementById('guess-btn');
const result = document.getElementById('guess-result');

let ct = 10;
let s = ""; // Properly initialize the string

guessbtn.addEventListener('click', function () {
    if (parseInt(input.value) === x) { // Compare input with x
        result.value = 'You win!';
        guessbtn.disabled = true; // Disable the button after winning
    } else {
        result.value="Wrong value";
        ct--;
        s += " " + input.value; // Append guess to the string
        array.value = s;
        chances.value = ct;

        if (ct === 0) { // Check if chances are exhausted
            result.value = 'Game over!';
            guessbtn.disabled = true; // Disable the button
        }
    }
});

console.log(x); // Log x for debugging

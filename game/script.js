const start = document.querySelector('#start');
const btn = document.querySelector('#click');
const input = document.querySelector('#count');
const clock = document.querySelector('#clock');
const result = document.querySelector('#result');
let counter = 0;
let timer;
let timeLeft = 5;

// Titles based on clicking speed
const titles = ["Turtle", "Snail", "Rabbit", "Horse", "Cheetah", "Rocket"];

function updateClock() {
    clock.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        btn.disabled = true;
        displayResult();
    }
}

function displayResult() {
    let title;
    if (counter < 5) {
        title = titles[0];
    } else if (counter < 10) {
        title = titles[1];
    } else if (counter < 15) {
        title = titles[2];
    } else if (counter < 20) {
        title = titles[3];
    } else if (counter < 30) {
        title = titles[4];
    } else {
        title = titles[5];
    }
    result.innerHTML = `<h3>You clicked ${counter} times! Your title: <span style="color: #e55039;">${title}</span></h3>`;
}

start.addEventListener('click', function () {
    counter = 0;
    timeLeft = 5;
    input.value = '';
    result.innerHTML = '';
    btn.disabled = false;
    updateClock();
    timer = setInterval(() => {
        timeLeft--;
        updateClock();
    }, 1000);
});

btn.addEventListener('click', function () {
    counter++;
    input.value = counter;
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
});

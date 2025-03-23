let homeScore = document.getElementById('homeScore');
let guestScore = document.getElementById('guestScore');

let currentHomeScore = 0;
let currentGuestScore = 0;

function homePlusOne() {
    currentHomeScore++;
    homeScore.textContent = currentHomeScore;
}

function homePlusTwo() {
    currentHomeScore += 2;
    homeScore.textContent = currentHomeScore;
}

function homePlusThree() {
    currentHomeScore += 3;
    homeScore.textContent = currentHomeScore;
}

function guestPlusOne() {
    currentGuestScore++;
    guestScore.textContent = currentGuestScore;
}

function homePlusTwo() {
    currentGuestScore += 2;
    guestScore.textContent = currentGuestScore;
}

function homePlusThree() {
    currentGuestScore += 3;
    guestScore.textContent = currentGuestScore;
}
let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let oneHomePoint = document.getElementById("one-home-point");
let twoHomePoint = document.getElementById("two-home-point");
let threeHomePoint = document.getElementById("three-home-point");
let oneGuestPoint = document.getElementById("one-guest-point");
let twoGuestPoint = document.getElementById("two-guest-point");
let threeGuestPoint = document.getElementById("three-guest-point");

function addOneHomePoint() {
    console.log("Home Team has scored a point!");
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function addTwoHomePoint() {
    console.log("Home Team has scored two points!");
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThreeHomePoint() {
    console.log("Home Team has scored three points!");
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function addOneGuestPoint() {
    console.log("Guest Team has scored a point");
    guestCount += 1;
    guestScore.textContent = guestCount;   
}

function addTwoGuestPoint() {
    console.log("Guest Team has scored two points");
    guestCount += 2;
    guestScore.textContent = guestCount;   
}

function addThreeGuestPoint() {
    console.log("Guest Team has scored three points");
    guestCount += 3;
    guestScore.textContent = guestCount;   
}

function newGame() {
    console.log("A new game has started!")
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}
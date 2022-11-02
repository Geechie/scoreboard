//Actual Score 
homeScore = 0
guestScore = 0

let home = document.getElementById('homeScore')
let guest = document.getElementById('guestScore')
//Scoring Buttons

function home1() {
    homeScore += 1 
    home.textContent = homeScore
}

function home2() {
    homeScore += 2 
    home.textContent = homeScore
}

function home3() {
    homeScore += 3 
    home.textContent = homeScore
}

function guest1() {
    guestScore += 1 
    guest.textContent = guestScore   
}

function guest2() {
    guestScore += 2 
    guest.textContent = guestScore   
}

function guest3() {
    guestScore += 3 
    guest.textContent = guestScore   
}
 
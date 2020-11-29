$(document).ready(function () {});

let distanceToMonster = Math.random() * 90 + 10;
distanceToMonster = Math.round(distanceToMonster);
let value = distanceToMonster;
let addValue = document.getElementById("addValue");

if (addValue) {
  addValue.innerHTML += value + "m";
}

let counter;
function saveCounter() {
  counter = document.getElementById("counter").value;
  console.log(counter);
  anzahlVersuche.innerHTML = " ";
  anzahlVersuche.innerHTML = "Anzahl der Versuche: " + counter;
  anzahlVersuche.style.display = "block";
}

function shoot() {
  if (counter > 1) {
    let select = document.getElementById("selectPlanet");
    let g = select.options[select.selectedIndex].value;
    let angle = document.getElementById("angle").value;
    let power = document.getElementById("power").value;
    let finalAngle = angle * (Math.PI / 180);
    let throwingDistance = (power * power * Math.sin(2 * finalAngle)) / g;
    throwingDistance = Math.round(throwingDistance);
    console.log(throwingDistance);
    if (power == 0 || angle == 0) {
      wurfErgebnis.innerHTML = "Bitte gib eine gültige Zahl über 0 ein!";
      wurfErgebnis.style.display = "block";
    }
    if (throwingDistance == distanceToMonster) {
      document.getElementById("hide").style.display = "none";
      document.getElementById("messageBoxWin").style.display = "block";
    } else if (throwingDistance < distanceToMonster) {
      wurfErgebnis.innerHTML =
        "Wurfweite: " +
        throwingDistance +
        " m. Du musst etwas weiter werfen. Das Monster ist " +
        distanceToMonster +
        " m weit von dir entfernt.";
    } else if (throwingDistance > distanceToMonster) {
      wurfErgebnis.innerHTML =
        "Wurfweite: " +
        throwingDistance +
        " m. Du musst weniger weit werfen. Das Monster ist nur " +
        distanceToMonster +
        " m weit von dir entfernt.";
      wurfErgebnis.style.display = "block";
    }
    counter = counter - 1;
    anzahlVersuche.innerHTML = "Anzahl der Versuche: " + counter;
    console.log("aktueller counter " + counter);
  } else {
    document.getElementById("hide").style.display = "none";
    document.getElementById("messageBoxLoose").style.display = "block";
  }
}

let symbolComputer;
let symbolSpieler;
let gewinneComputer = 0;
let gewinneSpieler = 0;
let gewinnBedingung = 3;
let ausgedachteZahl;
let gerateneZahl;
let anzahlSpiele = gewinneComputer + gewinneSpieler;
let ergebnis = document.getElementById("rundenstand");
console.log(ergebnis);

function startGame(chosenSymbol) {
  ausgedachteZahl = Math.random() * 3;
  ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);
  console.log(ausgedachteZahl);

  if (ausgedachteZahl == 1) {
    symbolComputer = "Schere";
  }
  if (ausgedachteZahl == 2) {
    symbolComputer = "Stein";
  }
  if (ausgedachteZahl == 3) {
    symbolComputer = "Papier";
  }

  if (chosenSymbol == "scissors") {
    symbolSpieler = "Schere";
  }
  if (chosenSymbol == "rock") {
    symbolSpieler = "Stein";
  }
  if (chosenSymbol == "paper") {
    symbolSpieler = "Papier";
  }
  // Spielstand stimmt nicht
  if (symbolComputer == symbolSpieler) {
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Unentschieden!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }

  if (symbolComputer == "Schere" && symbolSpieler == "Stein") {
    gewinneSpieler++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Stein gegen Schere gewonnnen!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }
  if (symbolComputer == "Stein" && symbolSpieler == "Schere") {
    gewinneComputer++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Schere gegen Stein verloren!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }
  if (symbolComputer == "Papier" && symbolSpieler == "Schere") {
    gewinneSpieler++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Schere gegen Papier gewonnen!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }
  if (symbolComputer == "Schere" && symbolSpieler == "Papier") {
    gewinneComputer++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Papier gegen Schere verloren!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }
  if (symbolComputer == "Stein" && symbolSpieler == "Papier") {
    gewinneSpieler++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Papier gegen Stein gewonnen!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }

  if (symbolComputer == "Papier" && symbolSpieler == "Stein") {
    gewinneComputer++;
    ergebnis.innerHTML = " ";
    ergebnis.innerHTML =
      "Du hast mit Stein gegen Papier verloren!" +
      " Es steht " +
      gewinneComputer +
      " zu " +
      gewinneSpieler;
  }

  if (gewinneComputer == 3) {
    document.getElementById("messageBoxLoose").style.display = "block";
    document.getElementById("hide").style.display = "none";
    gewinneSpieler = 0;
    gewinneComputer = 0;
  }

  if (gewinneSpieler == 3) {
    document.getElementById("messageBoxWin").style.display = "block";
    document.getElementById("hide").style.display = "none";
    gewinneSpieler = 0;
    gewinneComputer = 0;
  }
}

let obergrenzzahl;
let randomZahl;
function obergrenze() {
  obergrenzzahl = document.getElementById("obergrenze").value;
  console.log(obergrenzzahl);
  grenzzahl.innerHTML += " " + obergrenzzahl;
  grenzzahl.style.display = "block";
  randomZahl = Math.round(Math.random() * (obergrenzzahl - 1));
  console.log("Computerzahl" + randomZahl);
}

function checkNumber() {
  let userZahl = document.getElementById("zahl").value;
  console.log("Userzahl: " + userZahl);
  console.log("Counter: " + anzahlVersuche);

  if (counter > 1) {
    if (randomZahl == userZahl) {
      document.getElementById("messageBoxWin").style.display = "block";
      document.getElementById("hide").style.display = "none";
    } else if (randomZahl < userZahl) {
      hint.innerHTML = " ";
      hint.innerHTML = "Deine Zahl ist zu groß, versuch es noch einmal";
    } else if (randomZahl > userZahl) {
      hint.innerHTML = " ";
      hint.innerHTML = "Deine Zahl ist zu klein, versuch es noch einmal!";
    }
    counter = counter - 1;
    console.log("Der Counter ist nach einer Spielrunde: " + counter);
    anzahlVersuche.innerHTML = " ";
    anzahlVersuche.innerHTML = "Anzahl der Versuche: " + counter;
    document.getElementById("zahl").value = null;
    console.log(userZahl);
  } else {
    document.getElementById("messageBoxLoose").style.display = "block";
    document.getElementById("hide").style.display = "none";
  }
}

let computercode;
function codeGenerieren() {
  computercode = Math.floor(Math.random() * (999 - 111 + 1)) + 111;
  console.log(computercode);
}

let spielrunden = 12;

function codeKnacken() {
  let computercodeString = computercode.toString();
  console.log(computercodeString);
  let userCode = document.getElementById("userCode").value;
  console.log(userCode);
  let ziffer1 = userCode.charAt(0);
  console.log(ziffer1);
  let ziffer2 = userCode.charAt(1);
  console.log(ziffer2);
  let ziffer3 = userCode.charAt(2);
  console.log(ziffer3);

  let ergebnis1 = computercodeString.search(ziffer1);
  let ergebnis2 = computercodeString.search(ziffer2);
  let ergebnis3 = computercodeString.search(ziffer3);
  console.log("Ergebnis1: " + ergebnis1);

  if (spielrunden > 1) {
    if (computercodeString.charAt(0) == ziffer1) {
      benachrichtigung1.innerHTML =
        "Die erste Stelle " +
        computercodeString.charAt(0) +
        " wurde richtig erraten";
      benachrichtigung1.style.display = "block";
      var condition1 = true;
    } else if (computercodeString.charAt(0) == ziffer2) {
      benachrichtigung1.innerHTML =
        "Die Zahl " +
        ziffer2 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung1.style.display = "block";
    } else if (computercodeString.charAt(0) == ziffer3) {
      benachrichtigung1.innerHTML =
        "Die Zahl " +
        ziffer3 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung1.style.display = "block";
    }

    if (computercodeString.charAt(1) == ziffer2) {
      benachrichtigung2.innerHTML =
        "Die zweite Stelle " +
        computercodeString.charAt(1) +
        " wurde richtig erraten";
      benachrichtigung2.style.display = "block";
      var condition2 = true;
    } else if (computercodeString.charAt(1) == ziffer1) {
      benachrichtigung2.innerHTML =
        "Die Zahl " +
        ziffer1 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung2.style.display = "block";
    } else if (computercodeString.charAt(1) == ziffer3) {
      benachrichtigung2.innerHTML =
        "Die Zahl " +
        ziffer3 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung2.style.display = "block";
    }

    if (computercodeString.charAt(2) == ziffer3) {
      benachrichtigung3.innerHTML =
        "Die dritte Stelle " +
        computercodeString.charAt(2) +
        " wurde richtig erraten";
      benachrichtigung3.style.display = "block";
      var condition3 = true;
    } else if (computercodeString.charAt(2) == ziffer1) {
      benachrichtigung3.innerHTML =
        "Die Zahl " +
        ziffer1 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung3.style.display = "block";
    } else if (computercodeString.charAt(2) == ziffer2) {
      benachrichtigung3.innerHTML =
        "Die Zahl " +
        ziffer3 +
        " ist richtig, steht aber an der falschen Stelle";
      benachrichtigung3.style.display = "block";
    }

    if (condition1 && condition2 && condition3 == true) {
      document.getElementById("messageBoxWin").style.display = "block";
      document.getElementById("hide").style.display = "none";
    }

    spielrunden = spielrunden - 1;
    anzahlVersuche.innerHTML = " ";
    anzahlVersuche.innerHTML = "Anzahl der Versuche: " + spielrunden;
    anzahlVersuche.style.display = "block";
  } else {
    document.getElementById("messageBoxLoose").style.display = "block";
    document.getElementById("hide").style.display = "none";
  }
}

function playAgain() {
  location.reload();
}

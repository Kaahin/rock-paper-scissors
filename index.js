let userWeapon = undefined;
let computerWeapon = undefined;
const winner = document.querySelector("#winner");
const result = document.querySelector("#result");

//koppla knappar
const stenKnapp = document.querySelector("#rock");
const saxKnapp = document.querySelector("#scissor");
const papperKnapp = document.querySelector("#paper");

// stenknapp eventlistener
stenKnapp.addEventListener("click", () => {
  userWeapon = "sten";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});
saxKnapp.addEventListener("click", () => {
  userWeapon = "sax";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});
papperKnapp.addEventListener("click", () => {
  userWeapon = "påse";
  console.log(`Du har valt: ${userWeapon}`);
  getWinner();
});

// Beräkna vem som vinner spelet...?
const getWinner = () => {
  // console.log('getting winner');
  //test för att se om knappen fungerar

  computerWeapon = Math.round(Math.random() * 2);
  console.log(computerWeapon);

  if (computerWeapon === 0) {
    computerWeapon = "sten";
  } else if (computerWeapon === 1) {
    computerWeapon = "sax";
  } else if (computerWeapon === 2) {
    computerWeapon = "påse";
  }

  result.innerHTML = `Ditt vapen är ${userWeapon} 
    och datorns vapen är ${computerWeapon}`;

  // alternativ 1:
    if (userWeapon === computerWeapon) {
      winner.innerHTML = "Det blev Oavgjort!";
    } else if (userWeapon === "sten") {
      winner.innerHTML = computerWeapon === "sax" ? "Du vann!" : "Datorn vann!";
    } else if (userWeapon === "sax") {
      winner.innerHTML = computerWeapon === "påse" ? "Du vann!" : "Datorn vann!";
    } else if (userWeapon === "påse") {
      winner.innerHTML = computerWeapon === "sten" ? "Du vann!" : "Datorn vann!";
    }

  // alternativ 2:
  /* if (computerWeapon > userWeapon) {
    winner.innerHTML = "Datorn vann!";
  } else if (computerWeapon < userWeapon) {
    winner.innerHTML = "Du vann!";
  } else {
    winner.innerHTML = "Det blev Oavgjort";
  } */
};

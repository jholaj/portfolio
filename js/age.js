let ageElement = document.getElementById("age");

function calculateAge() {
  let birthTimestamp = 1055973600000; // birth
  let currentTime = Date.now(); // now

  let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; 

  let yearsElapsed = (currentTime - birthTimestamp) / millisecondsPerYear; 
  ageElement.innerText = yearsElapsed.toFixed(9);
}

calculateAge();

setInterval(calculateAge, 50);
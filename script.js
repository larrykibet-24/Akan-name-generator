const maleNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const submitButton = document.querySelector("#submit-button");
let CC;
let YY;
let MM;
let DD;
let d;

submitButton.addEventListener("click", (event) =>{
    //prevent form from refreshing page
    event.preventDefault();

    //retrieve values from the form
    CC = document.querySelector(Math.floor("#year" / 100))
    YY =document.querySelector("#year" % 100) 
    MM = document.querySelector("#month").value;
    DD = document.querySelector("#day").value;

    const dayIndex = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7,
  );
   const resultDiv = document.getElementById("result");
  const displayP = document.getElementById("display-name");

  displayP.textContent = akanName;
  resultDiv.classList.remove(".hidden");
});
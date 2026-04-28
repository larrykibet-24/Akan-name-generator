const maleNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const submitButton = document.querySelector("#submit-button");
let CC;
let YY;
let MM;
let DD;
let d;

submitButton.addEventListener("click", (event) =>){
    //prevent form from refreshing page
    event.preventDefault();

    //retrieve values from the form
    CC = 
    YY = 
    MM = document.querySelector("month").value;
    DD = document.querySelector("day").value;

}
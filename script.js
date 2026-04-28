const maleNames = [
  "Kwasi",
  "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (event) => {
  // Prevent form from refreshing page
  event.preventDefault();

  // Retrieve values from the form
  const yearValue = parseInt(document.querySelector("#year").value);
  const CC = Math.floor(yearValue / 100);
  const YY = yearValue % 100;
  const MM = parseInt(document.querySelector("#month").value);
  const DD = parseInt(document.querySelector("#day").value);

  // Get the selected gender
  const gender = document.querySelector('input[name="gender"]:checked').value;  

  // Check if gender is selected
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Calculate the day of the week index
  const dayIndex = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7,
  );

  // Ensure the index is positive
  const finalIndex = Math.abs(dayIndex);

  // Pick the Akan name based on gender and day index
  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[finalIndex];
  } else {
    akanName = femaleNames[finalIndex];
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  const displayP = document.getElementById("display-name");

  displayP.textContent = akanName;
  resultDiv.classList.remove("hidden");
});

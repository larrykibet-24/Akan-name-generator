const maleNames = [
  "Sunday : Kwasi",
  "Monday : Kwadwo",
  "Tuesday : Kwabena",
  "Wednesday : Kwaku",
  "Thursday : Yaw",
  "Friday : Kofi",
  "Saturday : Kwame",
];

const femaleNames = [
  "Sunday : Akosua",
  "Monday : Adwoa",
  "Tuesday : Abenaa",
  "Wednesday : Akua",
  "Thursday : Yaa",
  "Friday : Afua",
  "Saturday : Ama",
];

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (event) => {
  // Prevent form from refreshing page
  event.preventDefault();

  // Retrieve values from the form
  const yearValue = document.querySelector("#year").value;
  const CC = Math.floor(yearValue / 100);
  const YY = yearValue % 100;
  const MM = document.querySelector("#month").value;
  const DD = document.querySelector("#day").value;

  // Get the selected gender
  // checked is the same as selected
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Validate Month (Must be 1-12)
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  // Validate Day (Must be 1-31)
  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  // Validate Year
  if (year < 1000 || year > 4000) {
    alert("Please enter a valid year");
    return;
  }

  // Check if gender is selected
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Calculate the day of the week index
  const dayIndex = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7,
  );

  // Ensures the index is positive
  const i = Math.abs(dayIndex);

  // Pick the Akan name based on gender and day index
  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[i];
  } else {
    akanName = femaleNames[i];
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  const displayP = document.getElementById("display-name");

  displayP.textContent = akanName;
  resultDiv.classList.remove("hidden");
});

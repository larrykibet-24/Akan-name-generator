// Lists of Akan names in the order of days from Sunday to Saturday.
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Get the form and input elements from the HTML page.
const form = document.getElementById("Akan-form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const genderInputs = document.querySelectorAll("input[name='gender']");
const resultContainer = document.getElementById("result");
const displayName = document.getElementById("display-name");

// The names of weekdays for showing the day that was calculated.
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Return the selected gender radio button value, or null if nothing is selected.
function getSelectedGender() {
  for (const input of genderInputs) {
    if (input.checked) {
      return input.value;
    }
  }
  return null;
}

// Check if the date values entered are a real calendar date.
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// Show the result section and put the Akan name and day on the page.
function showResult(name, dayOfWeek) {
  displayName.textContent = `${name} (${weekdayNames[dayOfWeek]})`;
  resultContainer.classList.remove("hidden");
}

// Hide the result section and clear any displayed text.
function hideResult() {
  resultContainer.classList.add("hidden");
  displayName.textContent = "";
}

// Listen for the form submit button click.
form.addEventListener("submit", function (event) {
  // Prevent the browser from refreshing the page.
  event.preventDefault();

  // Read the values that the user typed in.
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);
  const gender = getSelectedGender();

  // If no gender is chosen, show an alert and stop.
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Validate the date before using it.
  if (!isValidDate(day, month, year)) {
    alert("Please enter a valid birth date.");
    hideResult();
    return;
  }

  // Create a Date object and find the weekday number.
  const birthDate = new Date(year, month - 1, day);
  const dayOfWeek = birthDate.getDay();

  // Pick the correct Akan name based on gender and day of week.
  const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  // Display the name and weekday to the user.
  showResult(akanName, dayOfWeek);
});

// When the reset button is pressed, hide the result again.
form.addEventListener("reset", function () {
  hideResult();
});

const maleNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const form = document.getElementById("Akan-form");
const finalResult = document.getElementById("result");
const display = document.getElementById("display-name");

form.addEventListener("submit", (event) => {
  // Prevent form from refreshing page
  event.preventDefault();

  // Retrieve values from the form
  const MM = (document.getElementById("month").value);
  const DD = (document.getElementById("day").value);
  const yearValue = document.getElementById("year").value;
  const CC = (yearValue.substring(0, 2));
  const YY = (yearValue.substring(2, 4));

  // Get the selected gender
  // checked is the same as selected
  const genderElement = document.querySelector('input[name="gender"]:checked')

  // Check if gender is selected
  if (!genderElement) {
    alert("Please select your gender.");
    return;
  }
  const gender = genderElement.value;

  // 3. Validation for Day and Month
  if (DD <= 0 || DD > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }
  if (MM <= 0 || MM > 12) {
    alert("Please enter a valid month (1-12).");
    return;
  }

  /** * 4. THE FORMULA
   * Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
   * Note: We use Math.floor to simulate integer division.
   */
  let dayOfWeek =
    (Math.floor(CC / 4) -2 * CC -1 +Math.floor((5 * YY) / 4) +Math.floor((26 * (MM + 1)) / 10) +DD) % 7;

  // 5. Handle Negative Results from Modulo
  // In JS, % can return negative. We add 7 to make it positive.
  let i = Math.floor(dayOfWeek);
  if (i < 0) {
    i += 7;
  }

  // 6. Select Name
  let akanName = gender === "male" ? maleNames[i] : femaleNames[i];
  let dayName = days[i];

  // 7. Output Result
  display.innerHTML = `You were born on a <strong>${dayName}</strong>.<br>Your Akan name is <strong>${akanName}</strong>!`;
  finalResult.classList.remove("hidden");
});

// Hide result when form is cleared
form.addEventListener("reset", () => {
  finalResult.classList.add("hidden");
});

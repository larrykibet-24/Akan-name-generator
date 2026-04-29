const akanform = document.getElementById("Akan-form")
akanform.addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the input values from form -_-
    const dobInput = document.getElementById("birthdate").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Validation: Check if gender is selected
    if (!genderInput) {
      alert("Please select your gender.");
      return;
    }

    const gender = genderInput.value;
    const date = new Date(dobInput);

    // Validate if the date is valid or not results to boolean
    if (isNaN(date.getTime())) {
      alert("Please enter a valid date.");
      return;
    }

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();

    // Data Arrays for male and female names
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
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

    // Determine the correct name using the if else condition
    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else {
      akanName = femaleNames[dayOfWeek];
    }

    // Display result
    const finalResult = document.getElementById("result");
    const displayPara = document.getElementById("display-name");

    displayPara.innerHTML = `You were born on a <strong>${days[dayOfWeek]}</strong>. <br> Your Akan name is <strong>${akanName}</strong>!`;

    // Remove the 'hidden' class to show the result
    finalResult.classList.remove("hidden");
  });

// Optional: Hide the result box again if the user clicks "Clear Form"
document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("result").classList.add("hidden");
});

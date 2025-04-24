function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const resultElement = document.getElementById("result");
  
    // Validate input
    if (!day || !month || !year) {
      resultElement.textContent = "Please fill in all fields.";
      return;
    }
  
    // Current date
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    // Check if birth date is in the future
    if (birthDate > today) {
      resultElement.textContent = "Seems like You are from the future! Plz fill in with valid dates";
      return;
    }
  
    // Calculate age in years
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Adjust age if the birth month or day hasn’t passed yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      ageYears--;
    }
  
    // Calculate the difference in days
    const currentYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const daysDifference = Math.floor((today - currentYearBirthday) / (1000 * 60 * 60 * 24));
  
    // Adjust if the birthday hasn't occurred this year
    const ageDays = daysDifference >= 0 ? daysDifference : 365 + daysDifference;
  
    resultElement.textContent = `You are ${ageYears} years and ${ageDays} days old.`;
  }
  
  // Set the max attribute of the year input to the current year
  document.getElementById("year").max = new Date().getFullYear();
  
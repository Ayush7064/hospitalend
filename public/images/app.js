// JavaScript to handle multi-step form navigation
let currentStep = 0;
const steps = document.querySelectorAll(".step");

// Function to show the current step
function showStep(step) {
  steps.forEach((s, index) => {
    s.classList.remove("active");
    if (index === step) {
      s.classList.add("active");
    }
  });
}

// Show the first step initially
showStep(currentStep);

// Function to go to the next step
function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

// Function to go to the previous step
function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

// Handle form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(this);

  // Send the data to the backend
  fetch("/submit-appointment", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      alert("Appointment booked successfully!");
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

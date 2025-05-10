// Button Click Event
const clickMeBtn = document.getElementById("clickMeBtn");
const clickResult = document.getElementById("clickResult");

clickMeBtn.addEventListener("click", () => {
  clickResult.textContent = "🎉 Button clicked!";
  clickMeBtn.style.backgroundColor = "#4CAF50"; // change color on click
});

// Hover Event
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#f0a";
  hoverBox.textContent = "You're hovering! ✨";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "";
  hoverBox.textContent = "Hover over me!";
});

// Keypress Detection
const keyInput = document.getElementById("keyInput");
const keyResult = document.getElementById("keyResult");

keyInput.addEventListener("keydown", (event) => {
  keyResult.textContent = `You pressed: ${event.key}`;
});

// Form Validation
const form = document.getElementById("sampleForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formFeedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent actual form submission
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !email.includes("@")) {
    formFeedback.textContent = "❌ Please enter a valid email.";
    return;
  }

  if (password.length < 8) {
    formFeedback.textContent = "❌ Password must be at least 8 characters.";
    return;
  }

  formFeedback.textContent = "✅ Form submitted successfully!";
});
// Real-time Email Validation
emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
      formFeedback.textContent = "📧 Email should be valid (e.g., name@example.com)";
    } else {
      formFeedback.textContent = "";
    }
  });
  
  // Real-time Password Validation
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length < 8) {
      formFeedback.textContent = "🔒 Password must be at least 8 characters.";
    } else {
      formFeedback.textContent = "";
    }
  });
  
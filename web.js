document.addEventListener("DOMContentLoaded", () => {
    // Calculate and display the current age
    updateAge();

    // Add event listener to profile picture for an alert message
    const profilePicture = document.getElementById("profilePicture");
    profilePicture.addEventListener("click", () => {
        alert("Hello! This is Dewati Anjasmita HendriYanto's profile.");
    });

    // Add event listener for theme toggle
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", toggleTheme);

    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Add form validation
    const feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.addEventListener("submit", validateForm);
});

// Function to calculate and update age
function updateAge() {
    const birthYear = 2006; // Replace with your birth year
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById("age").innerText = age;
}

// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    saveThemePreference();
}

// Function to save theme preference in local storage
function saveThemePreference() {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);
}

// Function to load theme preference from local storage
function loadThemePreference() {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    if (isDarkTheme) {
        document.body.classList.add("dark-theme");
    }
}

// Function to validate form input
function validateForm(event) {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Thank you for your feedback!");
    }
}

// Smooth scrolling function
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust the offset for fixed navbar
        behavior: "smooth"
    });
}

// Load theme preference on page load
loadThemePreference();

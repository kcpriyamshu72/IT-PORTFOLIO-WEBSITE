document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", function(event) {
        // Form validation logic goes here
        event.preventDefault(); // Prevent form submission for demonstration
    });
});


//submit contact form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Log the data to the console (or send it to a server)
        console.log("Form submitted:", data);

        // Optionally, show a success message or reset the form
        alert("Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.");
        form.reset();
    });
});
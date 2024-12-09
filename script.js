document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert("Please enter a valid email address!");
    } else {
        alert("Thank you for reaching out! We'll get back to you soon.");
    }
});

// Display a custom message
function displayMessage() {
    document.getElementById('message').innerText = 'Hello! Thanks for clicking the button.';
}

// Increment a counter
let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill out all fields before submitting.');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}
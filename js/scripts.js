// This file contains the JavaScript code for managing user information.
// It handles user interactions, form submissions, and displays user information.

document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('user-form');
    const userInfoDisplay = document.getElementById('user-info-display');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const userName = document.getElementById('user-name').value;
        const userEmail = document.getElementById('user-email').value;
        const userAge = document.getElementById('user-age').value;

        displayUserInfo(userName, userEmail, userAge);
        userForm.reset();
    });

    function displayUserInfo(name, email, age) {
        userInfoDisplay.innerHTML = `
            <h2>User Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
        `;
    }
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !age || !address || !phone) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

     /**
     * Validates the phone number format.
     * If the phone number is not valid, an alert is displayed and the form submission is prevented.
     * 
     * @param {string} phone - The phone number to validate.
     */
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    document.getElementById('displayName').textContent = `Name: ${name}`;
    document.getElementById('displayEmail').textContent = `Email: ${email}`;
    document.getElementById('displayAge').textContent = `Age: ${age}`;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
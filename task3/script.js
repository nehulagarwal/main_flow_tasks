// Add interactivity for the navigation menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'red';
    } else if (!validateEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Thank you for your message!';
        feedback.style.color = 'green';
        form.reset(); // Clear the form
    }
});

// Helper function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Dynamic updates for the menu
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Ice Cream', price: '₹199', image: 'https://via.placeholder.com/200' },
        { name: 'Fries', price: '₹149', image: 'https://via.placeholder.com/200' },
    ];

    const menuContainer = document.querySelector('.menu-container');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;

        menuContainer.appendChild(menuItem);
    });
});
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Show confirmation message
    const formContainer = document.querySelector("#order .back");
    formContainer.innerHTML = `
        <h1>Thank you!</h1>
        <p>Your order has been placed successfully.</p>
        <p>Do you want to order anything else?</p>
        <button onclick="location.reload()">Order Again</button>
    `;
});

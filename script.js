document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents page reload on submit

        // Collecting form data into an object
        const formData = {
            name: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            doctor: document.getElementById('doctor').value,
            date: document.getElementById('date').value,
            message: document.getElementById('message').value
        };

        // Output data in browser console (for testing)
        console.log("Patient Appointment Data:", formData);

        // Display success message
        successMsg.style.display = 'block';

        // Reset form fields
        form.reset();

        // Hide success message automatically after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    });
});
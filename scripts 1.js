// Client-side form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("responseMessage");

    if (name && email && message) {
        responseMessage.style.display = 'block';
        responseMessage.innerText = 'Submitting...';
        return true;
    } else {
        responseMessage.style.display = 'block';
        responseMessage.innerText = 'Please fill out all fields.';
        return false;
    }
}

// Display response from the server
async function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contact");
    const formData = new FormData(form);

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        responseMessage.style.display = 'block';
        responseMessage.innerText = result.message;
    } catch (error) {
        responseMessage.style.display = 'block';
        responseMessage.innerText = 'Submission failed. Please try again.';
    }
}

document.getElementById("contact").addEventListener("submit", handleSubmit);


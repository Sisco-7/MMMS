// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display a thank you message
    const response = document.getElementById('formResponse');
    response.style.color = '#002147'; // Deep Blue
    response.textContent = `Thank you, ${name}! Your message has been sent.`;
  
    // Simulate sending the data to the admin
    console.log('Form Submitted:', { name, email, message });
  
    // Reset the form
    document.getElementById('contactForm').reset();
  });
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Form Response Message
    const formResponse = document.getElementById('formResponse');
  
    // Simulate Formspree Submission (Formspree handles the actual email sending)
    formResponse.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formResponse.style.color = 'green';
  
    // Clear the form
    this.reset();
  });
  
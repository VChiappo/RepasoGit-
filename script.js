document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
    } else if (!validateEmail(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
    } else {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar el código para enviar el formulario a un servidor
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

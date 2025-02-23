// Validación básica del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre && email && telefono && mensaje) {
      alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
      document.getElementById('formulario-contacto').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
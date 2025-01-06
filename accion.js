// Obtiene el elemento del DOM con el ID 'cta-form' y lo almacena en la variable 'form'
let form = document.getElementById('cta-form');

// Agrega un event listener al elemento 'form' que escucha eventos de tipo 'click'
form.addEventListener('click', function() {
  // Obtiene el elemento del DOM con el ID 'form' y lo almacena en la variable 'formElement'
  let formElement = document.getElementById('form');
  
  // Usa el método 'scrollIntoView' para desplazar la página hasta el elemento 'formElement'
  // El comportamiento del desplazamiento es suave gracias a la opción '{ behavior: "smooth" }'
  formElement.scrollIntoView({ behavior: 'smooth' });
});

// Define una función llamada 'presionarBoton' que se ejecuta al hacer clic en el botón de envío del formulario
function presionarBoton() {
  // Captura los valores de los campos de entrada del formulario y los almacena en variables locales
  let nombre = document.getElementById('name').value; // Obtiene el valor del campo de texto con ID 'name'
  let email = document.getElementById('email').value; // Obtiene el valor del campo de texto con ID 'email'
  let mensaje = document.getElementById('message').value; // Obtiene el valor del área de texto con ID 'message'

  // Verifica si alguno de los campos está vacío
  if (nombre === '' || email === '' || mensaje === '') {
    // Si algún campo está vacío, muestra una alerta al usuario y detiene la ejecución de la función
    alert('Por favor, complete todos los campos');
    return;
  }

  // Muestra un mensaje de agradecimiento al usuario y envía los datos capturados a la consola
  alert('Gracias por enviar tu mensaje, revisa la consola por favor');
  console.log({ nombre, email, mensaje }); // Imprime un objeto con los valores capturados en la consola

  // Limpia los campos del formulario estableciendo sus valores en cadenas vacías
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            event.preventDefault();
              RegistroPersona();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


function RegistroPersona(){
    let nombre = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtapellidos").value;
    //let genero = document.querySelector("validacionGenero").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let cedula = document.querySelector("#txtCedula").value;
    let correo = document.querySelector("#txtCorreo").value;
    let clave = document.querySelector("#txtClave").value;
    
    
    let url = `http://localhost:3000/personas`;

    let datos = {
        nombre : nombre,
        apellidos : apellidos,
        cedula : cedula,
        //genero : genero,
        clave : clave,
        correo : correo,
        telefono : telefono
    }

    fetch(url, {
        method : "POST",
        body : JSON.stringify(datos),
        headers : {'Content-Type': 'application/json'}
    }).then(resp => resp.json()).then(mensaje =>{
        console.log(mensaje)
    }) 
}
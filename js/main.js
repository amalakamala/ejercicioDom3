function myFunction(){
	var nombre = document.getElementById("name").value;
	var correo = document.getElementById("email").value;

	mostrarNombre.innerHTML = "<b>Nombre : </b>" + nombre;
	mostrarMail.innerHTML = "<b>Correo : </b>" + correo;
}


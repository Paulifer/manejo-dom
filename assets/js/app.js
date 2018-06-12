const boton = document.getElementById('btn');
boton.addEventListener('click', () =>{
	//aca guardo el comentario ingresado del usuario
	let comments = document.getElementById('comment').value;
	//lio el text area
	document.getElementById('comment').value = ' ';
	//contenedor donde dejare los comentarios en html
	const cont = document.getElementById('cont');
	//crea un div contendor
	const newComments = document.createElement('div');
	//validar que el textarea tenga un comentario
	if (comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	};
	//crea un check box
	const chck = document.createElement('input');
	chck.type = 'checkbox';
	//crear icono corazon
	const heart = document.createElement('i');
	heart.classList.add('fas','fa-heart','heart');
	//crear icono basura
	const trash = document.createElement('i');
	trash.classList.add('fas','fa-trash','trash');
	//nodos de texto del textarea
	let textNewComment = document.createTextNode(comments);

	const contendorElemento = document.createElement('p');
	contendorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contendorElemento);

	cont.appendChild(newComments);
});

/*var nueva=document.getElementById('todo').value;

if(nueva!=0|| nueva!=null){
	function agregarTarea(nueva);
}*/

function agregarTarea(){
	// de donde viene el texto
	var contenido=document.getElementById('texto').value;
	//donde ira texto
	var div1=document.createElement('div');
	//nodo que contiene las tareas
	var nodPapa=document.getElementById('tareas-agregadas');
	//crea checkbox texto
	var tareaCheck=document.createElement('input');
	//setea atrbutos del checkbox
	tareaCheck.setAttribute("type", "checkbox");
	//crea nodo texto extraido el textarea
	var textoTarea=document.createTextNode(contenido);
	//crea elemento p que contendra la tarea
	var contiene=document.createElement('span');
	//contiene es papa de textarea
	contiene.appendChild(textoTarea);
	
	//nodopadre asigna hijo checkbox
	div1.appendChild(tareaCheck);
	//nodopadre aisgna hjo texto
	div1.appendChild(contiene);
	nodPapa.appendChild(div1);
}



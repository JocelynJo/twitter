
/*var nueva=document.getElementById('todo').value;

if(nueva!=0|| nueva!=null){
	function agregarTarea(nueva);
}*/

function agregarTarea(){
	// de donde viene el texto
	var contenido=document.getElementById('texto').value;
	//donde ira texto
	var div1=document.createElement('div');
	div1.classList.add("row");
	//nodo que contiene las tareas
	var nodPapa=document.getElementById('tareas-agregadas');
	//crea checkbox texto
	var tareaCheck=document.createElement('input');
	//setea atrbutos del checkbox
	tareaCheck.setAttribute("type", "checkbox");
	tareaCheck.classList.add("col-md-1","col-sm-1","col-xs-1");
	//crea nodo texto extraido el textarea
	var textoTarea=document.createTextNode(contenido);
	//crea elemento p que contendra la tarea
	var contiene=document.createElement('span');
	contiene.classList.add("col-md-8","col-sm-8","col-xs-8");
	//crear iconos
	var corazon=document.createElement('i');
	corazon.setAttribute("class","fa fa-heart");
	corazon.setAttribute("aria-hidden","true");
	//corazon.classList.add("col-md-1","col-sm-1","col-xs-1");
	var basura=document.createElement('i');
	basura.setAttribute("class","fa fa-trash-o");
	basura.setAttribute("aria-hidden","true");
	var btoCor=document.createElement('button');
	var btoBa=document.createElement('button');
	btoCor.setAttribute("type","button");
	btoCor.classList.add("btn","btn-default","col-md-1","col-sm-1","col-xs-1","text-center");
	btoCor.appendChild(corazon);
	btoBa.setAttribute("type","button");
	btoBa.classList.add("btn","btn-default","col-md-1","col-sm-1","col-xs-1","text-center");
	btoBa.appendChild(basura);
	//hr
	
	//contiene es papa de textarea
	contiene.appendChild(textoTarea);
	
	//nodopadre asigna hijo checkbox

	div1.appendChild(tareaCheck);
	//nodopadre aisgna hjo texto
	div1.appendChild(contiene);
	div1.appendChild(btoCor);
	div1.appendChild(btoBa);
	
	nodPapa.appendChild(div1);
}



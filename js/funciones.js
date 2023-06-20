function cargarDatos()
{
    let url="";
    let m="";
    let table="\n<table class='table table-striped' border='2'>"+
    "\n<thead>"+
    "\n<th scope='col'> Nombre</th>"+
	"\n<th scope='col'> Apellido</th>"+
	"\n<th scope='col'> Email</th>"+
	"\n<th scope='col'> Cedula</th>"+
	"\n<th scope='col'> Estado</th>"+
	"\n<th scope='col'> Foto</th>"+
	"\n</thead>";
    let fila="\n<tr>"+
	"\n<td> @@ </td>"+
	"\n<td> TT </td>"+
	"\n<td> %% </td>"+
	"\n<td> HH </td>"+
	"\n<td> KK </td>"+
	"\n<td><img src='#'></td>"+
	"\n</tr>";
    fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{

		for (var i = 0; i < response.length; i++) {
			m+=fila.replace("@@",response[i].name);
		}

		m=table+m+"\n</table>";
		document.getElementById("datos").innerHTML=m;

	});
	fetch(url, {method:"GET", headers: { origin:"dominio.com"}}).then(response=>response.json()).then(response=>{
		for (var i = 0; i < response.length; i++) {
			m+=fila.replace("TT",response[i].name).replace("%%",response[i].email).replace("HH",response[i].city).replace("KK",response[i].state);
		}
	})
	
	document.getElementById("result").innerHTML=x;
}
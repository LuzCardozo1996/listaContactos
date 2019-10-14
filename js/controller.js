//Objeto de acceso a los datos
const persistence = new Persistence();
/*MENU*/
//Seleciona el menu y agrega un evento click 
//con una funcion que maneja una logica en el menu
$("ul li a").click(function(){

	if(!$(this).hasClass('active')){
	$("ul li a").toggleClass('active');
	$("#registros").toggle();
	$('#formulario').toggle();
	}	
});


//FORMULARIO
//GUARDAR
$("form").submit( function(evento){
	evento.preventDefault();
	//objeto persona
	let persona={
		nombre:$("#nombre").val(),
		telefono:$("#telefono").val(),
		email:$("#email").val(),
		direccion:$("#direccion").val()
	};
	persistence.guardar(persona);

	//limpia el formulario
	$('#btnCancelar').click();

	//carga de nuevo toda la tabla
	cargarTabla();

} );




/*TABLA*/
// Cargar datos
//carga todos los datos que hay en localStorage
//recorrieno el array qu es recupera por medio del 
//metodo persistence.recuperarTodos()
function cargarTabla(){
	//console.log ($('#tbContactos tbody').html());

	//elimina todos los items de la tabla, para volver a cargar
	$('#tbContactos tbody').html("");

	//recupera todos los datos en formato de arrayde objetos
	persistence.recuperarTodos().forEach( function(elem, key){
		let tmp =`<tr>
                                <th scope="row">${key}</th>
                                <td>${elem.nombre}</td>
                                <td>${elem.telefono}</td>
                                <td>${elem.email}</td>
                                <td>${elem.direccion}</td>
                                <td>
                                    <button onclick="" class="bnt btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Editar">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="" class="bnt btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Eliminar">
                                        <i class="fas fa-eraser"></i>
                                    </button>
                                </td>
                            </tr>`;

         //agrega cada item recuperado del localStorage
         //al final de la tabla
        $('#tbContactos tbody').append(tmp);

	} );
}
cargarTabla();
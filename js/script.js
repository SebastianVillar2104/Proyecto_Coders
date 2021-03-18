var datos_json;

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: 'https://raw.githubusercontent.com/SebastianVillar2104/test/main/productos.json'
  }).done(function (data) {

    datos_json = JSON.parse(data);
    console.log(datos_json)
  
  }).fail(function (error) {
    error = alert('no se establecio la conexion');
  })
});

fuction nueva(){
  
}




  


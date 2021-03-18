class Producto{
	constructor(nombre, precio, descuento){
		this.nombre = nombre;
		this.precio = precio;
		this.descuento = descuento;
	}
	getPrecioFinal = function(){
		return this.precio - this.precio * (this.descuento/100);
	}
  }
  

  
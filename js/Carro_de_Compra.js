class Carro_de_Compra{
	constructor(numero_carro){
		this.numero_carro = numero_carro;
		this.carro = [];
	}
	agregar_compra = function(producto){
		this.carro.push(producto);
	} 
	toString = function(){
		return this.numero_carro;
	}   
	getPrecio = function(){
		var suma = 0;
		for (var i=0; i< this.carro.length; i++){
			suma = suma + this.carro[i].getPrecioFinal();
		}
		return suma;
	}
  }
  
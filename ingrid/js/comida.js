let comidaop
let tipo_comidaop
let precio
let cantidad
let total
let comida
// console.log (" ingreser nombre del cliente")
nombre = prompt("ingrese nombre del cliente");

function respuestaComida(){
	switch (comida) {
		case 1:
			comidaop = parseInt(prompt(`1- sancocho y pollo sudado\n2- crema de verdura y alitas BBQQ\n3- sopa de maiz y pechuga gratinada`))
			return comidaop
		case 2:
			comidaop = parseInt(prompt(`4- pollo sudado\n5- alitas BBQQ\n6- pechuga gratinada`))
			return comidaop
		case 3:
			comidaop = parseInt(prompt(`7- sancocho\n8- crema de verdura\n9- sopa de maiz`))
			return comidaop
		default:
			alert("Seleccion incorrecta")
			return comidaop = 0
	}
}

do{
	comida = parseInt(prompt(`1-almuerzos completo\n2-bandeja\n3-sopa`));
	comidaop = respuestaComida(); 
	switch (comidaop) {
		case 1:
			precio = 12000
			alert("el precio del almuerzo es: "+precio)
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
	
			alert("El precio es: " + total)
			estado == 1
	
		case 2:
			precio = 17000
			alert("el precio del almuerzo es: "+precio)
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		
		case 3:
			precio = 19000
			alert("el precio del almuerzo es: "+precio)
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1

		case 4:
			precio = 8000
			alert("el precio del almuerzo es: "+precio)
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		case 5:
			precio = 12000
			alert("el precio del almuerzo es: "+precio)
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		case 6:
			precio = 19000
			alert("el precio del almuerzo es: "+precio)
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		case 7:
			precio = 4000
			alert("el precio del almuerzo es: "+precio)
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		case 8:
			precio = 5000
			alert("el precio del almuerzo es: "+precio)
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
		case 9:
			precio = 4000
			alert("el precio del almuerzo es: "+precio)
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total)
			estado == 1
			
		default:
			estado == 1
			alert("seleccion incorecta")
	}

}while(estado < 1)


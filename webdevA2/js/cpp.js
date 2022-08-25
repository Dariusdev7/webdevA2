class Cat {
	
	constructor(name, colour) {
		
		this.name = name;
		this.colour = colour;
		
	}
	
}


/*function Objectcreate() {
		
	let OCat = new Cat(document.getElementById("Textfield").value, document.getElementById("Colorfield").value, document.getElementById("Yearfield").value)
	
	return OCat;
	
}*/

let OCat = new Cat("Garfield", "Orange")

document.getElementById("codedemo").innerHTML = "Cat's name is " + OCat.name + ", Cat's color is " + OCat.colour;



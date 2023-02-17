createGrid(16, 16);



function createGrid (row, columns) {

	//Empty Container
	var div = document.getElementById('container');
			while(div.firstChild){
				div.removeChild(div.firstChild);
			}
	
	let numContainer = row * columns;
	
	//Create divs
	for(let i = 1; i <= numContainer; i++){
		const storeContainer = document.querySelector('#container');
		
		  storeContainer.style.setProperty('--grid-rows', row);
		  storeContainer.style.setProperty('--grid-cols', columns);
		
		let square = document.createElement("div");
		square.setAttribute('class', 'square');
		
		storeContainer.appendChild(square);
	}
	addEventListener();
}


function addEventListener () {
	
		//Event Listener for all squares in container
		const squares = document.querySelectorAll('.square');
		squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
		square.setAttribute('style', 'background: white;'); 
    });
});
	
}


function promptMe(){
    var input = prompt("Please type in how many squares you want. (max. 100)");
    
	if (input > 100) {
		alert("Please give a number < 100");
	}
	
	else {
		createGrid(input, input);
	}
	
}



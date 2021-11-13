console.log('Dragable img/box');

// grab img box ele which we applied draggable attribute
let iBox = document.querySelector('.imgBox');

//add event listener on it
iBox.addEventListener('dragstart', (e) => {

	console.log('drag start has been triggered.');
	e.target.className += ' hold';//append new class 

	//settimeout 0 ->run the below code lastly 
	setTimeout(() => {
		e.target.className = 'hide';//set class hide
	}, 0);
});

//when drag end then imgBox class again assign to first box
iBox.addEventListener('dragend', (e) => {
	console.log('drag end has been triggered.');
	e.target.className = 'imgBox'

});

//grab all whiteBoxes 
let whiteBoxes = document.getElementsByClassName('whiteBox');

//apply drag event on each white box 
// for taking different action when drag element move in/out/over it 
for (let box of whiteBoxes) {

	box.addEventListener('dragover', (e) => {
	   // set prevent default for drop image  
		e.preventDefault();

	});

	box.addEventListener('dragenter', (e) => {
    //  console.log('drag enter fired.')
	 e.target.className += ' dash';
	});
	box.addEventListener('dragleave', (e) => {
		// console.log('drag leave fired.')
		e.target.className = 'whiteBox';
		
	});
	box.addEventListener('drop', (e) => {
		// console.log('drag drop fired.')
		e.target.appendChild(iBox);
		
	});

}









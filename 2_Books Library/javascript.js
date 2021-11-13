console.log('Welcome to my books library');
console.log(this);
class libForm {

	//constructor
	constructor(book, author, bookType) {
		this.book = book;
		this.author = author;
		this.bookType = bookType;
	}
	
	// Prototypes or Methods 
	addBook() {
		let html = `<td>${this.book}</td>
					<td>${this.author}</td>
					<td>${this.bookType}</td>`;

		let tcontainer = document.getElementById('tableContainer');
		tcontainer.innerHTML += html;
		// tcontainer.insertAdjacentHTML('afterend', html);
	}
	clear() {
		let subBtn = document.querySelector('.formSec');
		subBtn.reset();
	}
}
// function
function displayAlert(val) {
	let a = document.querySelector('.notify');
	if (val == 'success') 
		a.innerHTML = `<div class="alert alert-success" role="alert">Book Successfuly Added!</div>`;
	else 
		a.innerHTML = `<div class="alert alert-danger" role="alert">Invalid Data,please fill valid data!</div>`;
}
//add event on form 
let form = document.querySelector('.formSec');
form.addEventListener('submit', (event) => {

	event.preventDefault();//prevent/avoid default form properties and functionality
	let bookName = document.querySelector('#bookNameInput').value;
	let authorName = document.querySelector('#authorNameInput').value;

	let sf = document.querySelector('#check1');
	let cp = document.querySelector('#check2');
	let f = document.querySelector('#check3');


	let bookType;
	if (sf.checked)
		bookType = 'Science Fection';
	else if (cp.checked)
		bookType = 'Coding & programing';
	else if (f.checked)
		bookType = 'Funny';
	else
		bookType = '-';

	let o1 = new libForm(bookName, authorName, bookType);
	if (bookName.length > 2 && authorName.length > 2) {
		o1.addBook();
		displayAlert('success');
		setTimeout(function () {
			let a = document.querySelector('.notify');
			a.innerHTML = '';
		}, 3000);
	}
	else {
		displayAlert('danger');
		setTimeout(function () {
			let a = document.querySelector('.notify');
			a.innerHTML = '';
		}, 3000);
	}

	o1.clear();
});


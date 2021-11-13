console.log('prototype');



function displayAllLocalData() { }

displayAllLocalData();

//constructor
function book(book, author, bookType) {
	this.book = book;
	this.author = author;
	this.bookType = bookType;
}

book.prototype.addBook = function () {
	let strHtml = `<td>${this.book}</td>
					<td>${this.author}</td>
					<td>${this.bookType}</td>`;

	document.getElementById('tableContainer').innerHTML += strHtml;
}
book.prototype.clear = function () {
	let form = document.querySelector('.formSec');
	form.reset();
}
book.prototype.valid = function (bn, an) {
	if (bn.length > 2 && an.length > 2) return true;
	else return false;
}

function notify(inpStr) {
	if (inpStr === 'success')
		document.querySelector('.notify').innerHTML = `<div class="alert alert-success" role="alert">Book Successfuly Added!</div>`;
	else
		document.querySelector('.notify').innerHTML = `<div class="alert alert-danger" role="alert">Incorrect Data,please enter valid data!</div>`;
}

document.querySelector('.formSec').addEventListener('submit', func);
function func(event) {

	event.preventDefault();//prevent default functionality of form 
	let bookName = document.getElementById('bookNameInput').value;
	let authorName = document.getElementById('authorNameInput').value;


	let sf = document.getElementById('check1');
	let cp = document.getElementById('check2');
	let fn = document.getElementById('check3');

	if (sf.checked)
		bookType = 'Science Fiction';
	else if (cp.checked)
		bookType = 'Coding and Programing';
	else if (fn.checked)
		bookType = 'Funny';
	else
		bookType = '-';

	let obj = new book(bookName, authorName, bookType);

	// ------ Storing Objects into local storage -------------------- 
	let str = localStorage.getItem('books');
	let strObj;
	if (str == null)
	strObj = [];
	else
	strObj = JSON.parse(str);
	
	strObj.push(obj);
	localStorage.setItem('books', JSON.stringify(strObj));
	//---------------- finish storing --------------------------------
	
	if (obj.valid(bookName, authorName)) {
		obj.addBook();
		notify('success');
		setTimeout(function () {
			document.querySelector('.notify').innerHTML = '';
		}, 3000);
	}
	else {
		notify('danger');
		setTimeout(function () {
			document.querySelector('.notify').innerHTML = '';
		}, 3000);
	}
	obj.clear();
}

//-------- display local storage data -----------------------------
function displayAllLocalData() {
	console.log('local storage date called');

	let strValue = localStorage.getItem('books');
	let strObjs;
	if (strValue == null)
		strObjs = [];
	else
		strObjs = JSON.parse(strValue);//convert string into object

	Array.from(strObjs).forEach(function (obj) {
	
		let bookName = obj['book'];
		let authorName = obj['author'];
		let bookType = obj['bookType'];

		let strHtml = `<td>${bookName}</td>
		<td>${authorName}</td>
		<td>${bookType}</td>`;

		document.getElementById('tableContainer').innerHTML += strHtml;

	});
}



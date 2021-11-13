console.log('check form data validation using regular expression ');

// let regex = //gi; //g = global ,i = igonr casesensitive

// grab element from document using DOM
let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let submitBtn = document.querySelector('.submitBtn');

let fn, ln, em, ph = false;

//add blur event on each input section for check input value is valid or not after blur
fName.addEventListener('blur', () => {

	let input = fName.value;
	// console.log(input);

	let regex = /^(\D)([a-zA-Z]{1,20})/;
	if (regex.test(input)) {
		console.log('true');
		fn = true;
	}
	else {
		console.log('false');
		fn = false;
	}

});

lName.addEventListener('blur', () => {

	let input = lName.value;
	console.log(input);

	let regex = /^([\D])([a-zA-Z]{1,20})/;
	if (regex.test(input)) {
		console.log('true');
		ln = true;
	}
	else {
		console.log('false');
		ln = false;
	}
});

email.addEventListener('blur', () => {

	let input = email.value;
	console.log(input);
	let regex = /^[a-zA-Z]([\w]+)@gmail\.([a-zA-Z])+/;  // nishantargade4579@gmail.com
	if (regex.test(input)) {
		em = true;
		console.log('true');
	}
	else {
		em = false;
		console.log('false');
	}

});

phone.addEventListener('blur', () => {

	let input = phone.value;
	console.log(input);
	let regex = /(\d){10}/; //ex reg  = 1234567890 input = 1232133131242423433532124546433256 
	if (input.length == 10 && regex.test(input)) {
		console.log('true');
		ph = true;
	}
	else {
		console.log('false');
		ph = false;
	}
});

function notify(flag) {
	let notifyContainer = document.getElementById('notifyContainer');
	if (flag === 'success')
		notifyContainer.innerHTML = `<div class="alert alert-${flag}" role="alert">
									data added successfuly,thank you.
								 </div>`;
	else
		notifyContainer.innerHTML = `<div class="alert alert-${flag}" role="alert">
									Please fill valid data!.
								 </div>`;

}

//if press click button then.. 
submitBtn.addEventListener('click', (event) => {

	event.preventDefault();

	if (fn && ln && ph && em) {
		notify('success');
	}
	else {
		notify('danger');

	}
	setTimeout(() => {
		let notifyContainer = document.getElementById('notifyContainer');
		notifyContainer.innerHTML = '';
	}, 3000);

	// console.log('Done submit');
});
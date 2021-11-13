console.log('|| Post master website JS ||');

//global parameter count
let parameterNo = 2;

// As by default json is checked hence,initialy hide paramBox1. 
let paramBox1 = document.getElementById('paramBox1');
paramBox1.style.display = 'none';

// Accoriding type of request check hide and show that perticular block 
document.getElementById('jsonCheck').addEventListener('click', () => {
	// console.log('custom jsonCheck');
	document.getElementById('requestJSOnBOX').style.display = '';
	document.getElementById('paramBox1').style.display = 'none';
	document.getElementById('extraParamBoxContainer').style.display = 'none';
});

document.getElementById('paramCheck').addEventListener('click', () => {
	// console.log('custom paramCheck');
	document.getElementById('paramBox1').style.display = '';
	document.getElementById('extraParamBoxContainer').style.display = '';
	document.getElementById('requestJSOnBOX').style.display = 'none';
});

// if user click on '+' icon button then there add new parameter box
let plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', (e) => {
	// e.preventDefault();
	let extraParamBoxContainer = document.getElementById('extraParamBoxContainer');

	let str = `	<div class="row my-2 params" id="paramBox${parameterNo}">
	<label class="col-sm-3" for="typeOfRespone">Parameter ${parameterNo}</label>
					<div class="col-sm-4">
					<input type="text" class="form-control inpp" placeholder="First name${parameterNo}" id="fname${parameterNo}">
					</div>
					<div class="col-4">
					<input type="text" class="form-control inpp" placeholder="Last name${parameterNo}" id="lname${parameterNo}">
					</div>
					<button class="btn btn-primary minusBtn" onclick = "deleteChild(${parameterNo})">-</button>
					</div>`;
	console.log(parameterNo);

	//add HTML element into extra parameter container
	extraParamBoxContainer.appendChild(getElementFromString(str));
	parameterNo++;

});

// convert string to HTML element and return again 
function getElementFromString(str) {
	let div = document.createElement('div');
	div.innerHTML = str;
	return div.firstElementChild;
}

// if user click on '-' button then remove this perticular element
function deleteChild(no) {
	document.getElementById(`paramBox${no}`).remove();
	// console.log(parameterNo);
}

//initialy add guid text into response area
document.getElementById('responseTextArea').innerText = "Your result display here.";

//if click on Submit button then collect all data above from submit button
document.getElementById('submitBtn').addEventListener('click', () => {
	// console.log('submit button pressed.');

	//add text for keep wating user while fetching data
	document.getElementById('responseTextArea').innerText = "processing please wait...."
	Prism.highlightAll(); // for hightlight html (color code)

	// grab all value above from submit button
	let url = document.getElementById('url').value;
	let typeOfReq = document.querySelector("input[name=requestCheck]:checked").value;
	let contentType = document.querySelector('input[name=contentType]:checked').value;

	//if user chose content type - json then store  request text area value into data
	if (contentType == 'JSON') {
		data = document.getElementById('requestTextArea').value;
	}
	else { // else store parameter value into data
		// console.log('param box');
		data = {};
		for (let i = 0; i < parameterNo; i++) {
			if (document.getElementById(`paramBox${(i + 1)}`)) {
				let key = document.getElementById(`fname${(i + 1)}`).value;
				let val = document.getElementById(`lname${(i + 1)}`).value;
				data[key] = val;
			}
		}
		data = JSON.stringify(data);//convert object data into string data
	}
	// console.log(url);
	// console.log(typeOfReq);
	// console.log('data is ', JSON.stringify(data));

	//Do According request type (method) . GET/POST
	if (typeOfReq == "GET") {
		fetch(url, { method: typeOfReq })
			.then(response => response.text())
			.then(result => {
				document.getElementById('responseTextArea').innerHTML = result;
				Prism.highlightAll();
			});
	}
	else {
		fetch(url, {
			method: "POST",
			body: data,
			headers: { 'Content-type': 'application/json' },
		})
			.then(response => response.text())
			.then(result => {
				document.getElementById('responseTextArea').innerHTML = result
				Prism.highlightAll();
			}
			);
	}
});

//That's all,thak you.
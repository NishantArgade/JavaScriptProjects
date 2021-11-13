console.log('calculator');
show();
function show() {
	document.getElementById('inputScreen').value = '00';
}
// for calculation use this function
// console.log(eval("2*3"));

let buttons = document.querySelectorAll('button');
let stringVal = '';
for (let btn of buttons) {
	//add event click on each buttton 
	btn.addEventListener('click', (e) => {

		if (e.target.innerText == 'x') {
			stringVal += '*';
			document.getElementById('inputScreen').value += 'x';
		}
		else if (e.target.innerText == 'C') {
			console.log('C fired');
			stringVal = '';
			document.getElementById('inputScreen').value = stringVal;
			show();
		}
		else if (e.target.innerText == '=') {
			stringVal = eval(stringVal);//evalueate stirng using this function
			document.getElementById('inputScreen').value = stringVal;
		}
		else if (e.target.innerText == '<--') {
			stringVal = document.getElementById('inputScreen').value;
			stringVal = stringVal.slice(0, -1);
			document.getElementById('inputScreen').value = stringVal;
		}
		else {//rest all numbers and signs are added here
			stringVal += e.target.innerText;
			document.getElementById('inputScreen').value = stringVal;
		}

	});
}
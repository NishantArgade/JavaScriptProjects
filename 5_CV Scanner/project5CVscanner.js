console.log('cv scanner');

// Array of user Objects
let freshers = [

	{
		img: 'https://randomuser.me/api/portraits/men/75.jpg',
		name: 'nishant',
		Age: 21,
		Qualification: 'B.E',
		Experience: 2,
		skill: ['java', 'javascript', 'c++', 'python', 'c', 'webdev', 'cp', 'bootstrap', 'figma', 'backdev']
	},
	{
		img: 'https://randomuser.me/api/portraits/men/76.jpg',
		name: 'Aniket',
		Age: 20,
		Qualification: 'B.E',
		Experience: 1,
		skill: ['java', 'figma', 'backdev']
	},
	{
		img: 'https://randomuser.me/api/portraits/women/84.jpg',
		name: 'tejal',
		Age: 22,
		Qualification: 'B.E',
		Experience: 3,
		skill: ['java', 'bootstrap', 'figma', 'backdev']
	},
	{
		img: 'https://randomuser.me/api/portraits/men/78.jpg',
		name: 'vaibhav',
		Age: 19,
		Qualification: 'B.E',
		Experience: 0,
		skill: ['java', 'backdev']
	},
	{
		img: 'https://randomuser.me/api/portraits/women/85.jpg',
		name: 'pooja',
		Age: 23,
		Qualification: 'B.Tech',
		Experience: 6,
		skill: ['bootstrap', 'figma', 'backdev']
	}
];

//iterate all single user object from array of user objects using iterator function.
function myIterator(freshers) {
	let ind = 0;
	return {
		next: () => {
			if (ind < freshers.length) {
				return {
					value: freshers[ind++],
					done: false
				}
			}
			else {
				return {
					value: undefined,
					done: true
				}
			}
		}
	}
}

// accept return object form iterator fuction.
let obj = myIterator(freshers);

// intialy get first user obj for display intialy
iteratorFunc();

//add click event on Next button 
document.getElementById('nextBtn').addEventListener('click', iteratorFunc);

function iteratorFunc() {

	//for next user just ,call next funtion using obj. 
	let emp = obj.next();

	//if user obj is last then done is true then notify that .
	if (emp.done == true) {
		alert('all resume has been scane.Press ok for again scaning.')
		window.location.reload();
	}
	else {
		//if user obj is not last then collect user value(user obj)
		let fresher = emp.value;

		//push all detail value form/card into details container.
		document.querySelector('.detailsContainer').innerHTML =
			                           `<div class="card-header">
											<img src=${fresher.img} alt="">
										</div>
										<ul class="list-group list-group-flush">
											<li class="list-group-item"><b>Name : </b> ${fresher.name}</li>
											<li class="list-group-item"><b>Age : </b>${fresher.Age}</li>
											<li class="list-group-item"><b>Qulification :</b> ${fresher.Qualification}</li>
											<li class="list-group-item"><b>Experience : </b>${fresher.Experience}</li>
											<li class="list-group-item"><b>Skill : </b>${fresher.skill}</li>										
										</ul>`;
	}
}
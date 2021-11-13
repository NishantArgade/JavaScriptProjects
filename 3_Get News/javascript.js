console.log('welcome to newsKatta');

//news api variables
let source = 'in';
let key = '90fd05aac42d42949a4527bb508d42e7';

//send get request using (xhr) HMLHTTpRequest 
// creat xhr object
const xhr = new XMLHttpRequest();

//open object and set and mark true for async
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${key}`, true);

//do when data is ready 
xhr.onload = function () {
	// console.log('onload function is running ');

	if (this.status == 200) {
		let json = JSON.parse(this.responseText);
		console.log(json.articles);
		
		let arrObj = json.articles;
		arrObj.forEach(function(ele,ind){

			let title = ele.title;
			let content = ele.content;
			let url = ele.url;

			document.getElementById('newsChart').innerHTML +=  `<div class="card">
																	<div class="card-header" id="headingOne">
																		<h5 class="mb-0">
																			<button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapse${ind}"
																				aria-expanded="true" aria-controls="collapseOne" style="width:100%;">
																		
																				<b>Breaking News : </b><p style =" width:100%;overflow:hidden">${title} </p>
																			</button>
																		</h5>
																	</div>

																	<div id="collapse${ind}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
																		<div class="card-body">
                                                                            ${content}
																			<a href="${url}" target="_black">Click Here for Detail.</a>
 																		</div>
																	</div>
																</div>`;     
		});
	}
	else {
		console.log('something went wrong!');
	}
}

//send get request using send method of xhr
xhr.send();

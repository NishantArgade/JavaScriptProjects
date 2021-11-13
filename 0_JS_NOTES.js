// for hidding red underline then go Ctr+p ->settings.json ->javascript.validate.enable = false;

# =======|||*** $$ JavaScript Notes $$ ***|||==========

# let -> block level scope(remmondade).
# var -> fuction level scope.
# cons -> function level scope.

# '123' == 123 //true for comparing value of two ele.
# '123' === '123'//true for comparing value as well as data typeof of two ele.

# Object flow:
window -> document -> html -> body -> elements
------------------------------
  (document object module   )
#DOM:
- document object module
  - we can access document content & can modify / manupulate it.
 - doucument Object has some usful properties & functions by default.

#single element selector(grab element from DOM):
- getElementByid(); & querySelector();
- their have own properties & methods
 #
  - getElementsByClassName(); getElementByTagName(); querySelectorAll();
- their have own properties & methods
  - purhaps, some properties & functions are not in it of single 
   element selector


# this keyword & their reference obj:
1.console.log(this); output => windo
2.func(){
  console.log(this); output => window
}
3.let obj = {
  func: function () {
    console.log(this); output => obj
  }
}

# for making editable string we can use -> ``

# '8' + 3' = 83;//here only (+) is use for concatinate the str
'8' * 3 = 24;
'8' / 3=2.6667
'8' - 3=5

# Array Operation:
substring = slice(start_ind, end_ind);
delete_ele = splice(index, numbers_of_ele_delete);

# 1.convert string into obj:
- JSON.parse(str);
2.convert obj into string:
- JSON.strigify(obj);

# 1.update / edit inner HTML or text of DOM(document object module) element:
- element.innerHTML = `<p>...</p>` or "any text";
2.Append HTML or text into inner of DOM elemnet:
- elemtent.innerHTML += `<p>...</p>` or "any text";

# Convert Objects into Array:
- Array.from(objs);

# Some properties & Mehods can not apply on many DOM elements at time.
  like innerHTML, innerText, addEventListener(),...etc.tha's why
  - grab element using only getEelementByid() & querySelector() they 
  select only one element..

# Random Number:
1.Random Number generated from 0 to n formula:
- z=Math.random() * 10;//random number generated between 0 to n
2.Random Number generated from x to n formula:
- z=Math.random() * (10 - 5) + 5;//random number generated between 0 to 9

# Prototype:
- substitute of class .
- it consist of constructors, properties, methods / prototype
  - Some prototype is alreay defaine.
    - can create / add new prototype  of constructor.
    - Don't create/add new prototype  of main object.

# 1.Local storage:
-store data permanently.
  - store data in key:value  formate.
  - value store in string formate only.
  2.Session storage:
-store data for a session if browser tab close then all data is distroy.

# Prevent Default functionality:
// form default functionality is reload once press submit button.
ex.//How to prevent default functionality show in below->
  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
  }

# 1.Synchronous programming:
    - one thing happens at a time.
  - it takes long - running action, it returns a result when the action has finished.
  - This stops the program for the time if any wrong action take place.

  2.Asynchronous programming *:
- allows multiple things to happen at the same time.
  - When the action finishes, the program is informed & gets the result.
  - When we start an action, the program continues to run.

* Difference between Synchronous & Asynchronous ->
  Suppose, we want to process two functions at time then,
    1.According to synchronous programming:
- we have to call first function().then after completed first
    it  gives an result, let time took for that is 12 sec.
  - then we have to call 2nd function let it take 13 sec to finish;
- Here the drawback is that the second request will be started only when
    the first has finished.
  - totol time to this process is 12 + 13=25 sec

2.According to asynchronous programming:
- when we call function,it does smart work,
  - they use an extra arrgument like settimeout(), callback, promis for that.
  - they perform all actions at time in background.
  - hence it takes less time.

 # Ajax:
- stands for 'Asynchronous javascript & XML'
  - it is nothing but technique is use for making fastest, more intractive 
    website with help of XML, html, css, javascript.
  - it use XMLHTTpRequest object which is inbuild in Browser.for
send & receive information Asynchronously with web server.

  * where ajax we can use ?
  -  Update / get data of perticular requesting portion / section only 
     without reload whole page
  .
  * Working of Ajax:
1.Step(Browser)
  - An event Occures.
  - the request for updating content is formatted in XML to make it 
    understandable for server.
  - create an XMLHTTpRequest object
    - send HTTpRequest to server
2.Step(Server)
  - Server Process HTTpRequest
    - create response & send data back to browser
3.Step(Browser)
  - process return data using javascript
    - upadate page content.


# Callback function :
 - it is a function.
- passing callbackFuncion as an arrgument to the func.
 - callback func call when the first func is completly process.
 - it is use for calling perticular function after the func.

# Promise:
- it use when we want to do somthing when promise get true one somthing
   when promise get false.
  * Benefits of Promises: -
  - It improves the code readability
    - It is better in the handling of asynchronous operations
      - It has a better flow of control definition in asynchronous logic
        - It is better in error handling


// function inside then is ran as - resolve()
// function inside catch is ran as - reject()

# Arrow function ()=>: ------(recommanded)
  - substitute fo function() { }
- use for making shortest line of code & write code in fastest way.
  - For single line of function no need for write {} & no need to write
return it will automaticaly return.
  - for single parameter func no need to write paranthesis() but for many 
    parameters it needs.

  * For single line function code can write as below:
1.for without parameter -
  let func = () => "i am a string & i am also able to return.";
console.log(func());
2.for object -
  let func = () => ({ name: 'nishant', roll: 03 });
  console.log(func());
3.For single Parameter function -
  let func = name => "i am single parameter func" + name;
console.log(func('nishant'));

# Fetch API: ------(recommanded)
  - substitute of xhr(XMLHTTpRequest)
    - use in mordern js for fetching & posting request.
 - promise - based API of JavaScript for making asynchronous HTTP requests.
 - Syntax:
   * GET Request-- >

  fetch('URL here(get)')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

   * POST Request-- >
  let data = {
    name: "nishant",
    roll: 03,
    div: 'A',
  }
let param = {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(data);
}
fetch('URL here(post)', param)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));


# Async & await function :
   - Using this we can write completely synchronous - looking code but
     performing Asynchronous tasks behind the scenes.
 1.The Async Keyword: -
  - We use the async keyword with a function to represent that the
function is Asynchronous.
   - The Async function always returns a promise.
   - syntax:

async function name(param1, param2, ...paramN) {... }

   * Benefits of using an async function:-
  - Debugging using promises sometimes is very hard because the debugger
       will not step over the asynchronous code.But the Async / await makes
this very easy because it is just like synchronous code to but behave
       like asynchronous run all actions in background.
     - As we can see from the example above, the code looks very simple 
       compared to the code using plain - promises, with chaining & callback 
       functions.
     - Error handling is simpler in async functions.

# ------ex.xhr, fetch, async - wait--------------

  1)get request with xhr:
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.onload = () => console.log(xhr.responseText);
  xhr.send();
  
  2)get request with fetch:
  fetch('https://icanhazdadjoke.com', {
    method: "GET", headers: {
      Accept: "application/json"
    }
  })
    .then(reponse => reponse.json())
    .then(res => console.log(result));
  
  3)get request with async wait
  async function getResponse() {
    let response = await fetch('https://icanhazdadjoke.com', {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
    let result = await response.json();
    document.querySelector('.card-text').innerHTML = result.joke;
  }
  getResponse();

# Regular Expressions:
- it is patterns that are used to match char combinations in strings.
     - it is powerful way of doing search & replace in strings.
     - it is a small language which is a part of many programming languages 
       like JavaScript, Python, & Java.
     - Syntax: -
  /pattern/modifiers;
modifiers: i = ignoreCaseSensitivness, g = global
i = make pattern inCaseSensetive
g = performs a global match that will find all matches before 
           last null match.

      * Methods:
1. exec(): -
  - it executes a search for a match in a string.
      - it returns an array of information or null on a mismatch / nomatch.
      - example.
let obj = /har/.exec("Code with harry");
2. test(): -
  - it returns true for successful search & false for unsuccessful search.
      3. match(): -
  - it is array containing all of the matches or null if no match is found.
      - example.
let str = "JavaScipt tutorial from begineer to advance level";
let result = str.match(/ial/);
4. search(): -
  - It returns the index of the match, or - 1 if the search fails.
      - example.
let str = 'Code with harry';
let result = str.search(/od/);
console.log(result);//=> 1  
5. replace(): -
  - it will executes a search for a match in a string,& replaces
        the matched substring with a replacement substring.
      - example.
let str = "Code with abc!";
let result = str.replace("abc", "Harry");
6. split(): -
  - use for get match string form given string.
      - example.
let str = "Code with abc!";
let result = str.split("abc");
 
      * Mata character:

1) '.' = any only one char can take it place.
      2) '*' = any 0 or more char can take it place.
      3) '+' = appending 0 or more char can take it place.
      4) '?' = indecate that char before '?' is optional.
      5) '\*', '\?', '\$', i.e'\char' = for indicate as it is special char. 
      6) ^ char  = to indicate that isFirst char or string. 
      7) char$ = to indicate that isLast char or string. 

      () =for making group of chars
[] = for indicating set of chars & range of char & numbers
{ }= quntifier,for indicating exact quentity or range of quentity
          of charcter or char set 
    

# Iteratoar:
- it is use for traversing objects from array in quick way.
 - just call next method of iteratoar fuction for next value.
 - syntax:
  function myIterable() {
    let counter = 0;
    return {
      next: function () {
        if (counter < 5) {
          counter++;
          return { done: false, value: counter };
        } else {
          return { done: true, value: undefined };
        }
      }
    }
  }
let fruits = [{ obj1 }, { obj2 }, { obj3 }, { obj4 }];
const fruits = myIterator(myArray);
console.log(fruits.next());

# Generator functions:

- Generator function pauses itself when it runs into a yield expression. 
  Once the execution reaches the yield expression, the generator cannot
continue execution on its own.Something from outside has to continue
  its execution.
- can produce multiple values during its execution.Hence, they can 
  generate a sequence of values, not all at once, but on a per request basis.
  At every request, the generator function gives us a value until it reaches
  the end of its execution.Once that happens, the done flag will be set true. 
- it use for getting result / calculation / ans on request     basis.
- example:
function* generatorFunc() {
  yield calcu;
  yield calcu;
  yield calcu;
}
const obj = generatorFunc();
console.log(obj.next());

#for Loops:

1.for loop:
  - it is traditional loop use for geting index:
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }

2.for in loop:
  syntax:
 i) For Object -
  - During Traversing, it gives gives key.
    for(let key in obj){ }

 ii) For Array(including string also) -
  - During Traversing, it gives index of item.
    for(let idx in arr){ }

3.for of loop:
  syntax:
  -it gives value / item of array.
    for(let item of arr){ }
- it can apply on array of objs also.
 - it can not apply on single obj.

4.forEach:
- it is use for Traversing array of objs(arr[obj1, obj2,...]);
Array.from(objs).forEach((value, key) => {
  console.log(value);
  console.log(key);
});

# Removing dublicate from array using set:

- set store unique element take advantage of it ->
  let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
const set = new Set(arr);
console.log(set);
# Symbol in js:
- it is use for creating unique key.
 - example:
  const sym1 = symbol('nishant');
const sym2 = symbol('nishant');
if (sym1 === sym2) //output: false;
  const k1 = symbol('nishant');
obj = { k1: 'hello' };
- it is ignore in for loop
  - also JSON.stringify(obj) it also get ignore

 #destructuring:
//Array destructuring-
[a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d);

[a, b, c, d, ...e] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(e);

//Object destructuring-
({ k1, k2, k3, k4 } = { k1: 'nishant', k2: 'hero', k3: 487, k4: 1212 })
  ({ k1, ...k4 } = { k1: 'nishant', k2: 'hero', k3: 487, k4: 1212 })
console.log(k1);
console.log(k4);

// Object destructuring-
let obj = {
  name: 'nishant',
  roll: 03,
  hobbies: 'coding',
  run: () => { return "RUNNING..."; }
}

const { name, roll, hobbie, run } = obj;
console.log(run(), name, roll);


//-------------------- Extra usful knowledge/concepts of JS --------------------------------------------------------------------------
# SetInterval function:
 - it is use for updating content in perticular interval of time.
 - syntax:
body < Onload = " setInterval('func()',1000) " >...</body >

# if you want ot add new child Element into DOM then use appendChild instead of(ele.innerHTML += "";)
(ele.innerHTML += "";)< --this append string into DOM;cant not perform any operation with that innerHTML(i.e string HTML).
(ele.appendChild(ele);)< --this append HTML element into DOM and can perform any operation with it innerHTML;

# if (console.log("nishant".includes(""));//string always contain blank string hence, ture

# event input - it gives input every single press / type. 
# event change - it gives input after complete change input text.

# The fastest way to add element into DOM at perticular postion:
domeleParent.insertAdjacentElement('position', element);
ex:
  append element after of begin div tag.
  displayNotes.insertAdjacentElement('afterbegin', noteEle);
- Visualization of postion names:
beforebegin
  < p >
  afterbegin
foo
beforeend
  < p >
  afterend

# remove element from local storage
  - localStorage.removeItem(title);
# remove parent element from it's child element
  - chlidElement.parentNode.remove();

# get element / HTML / Text from string
  - function getEleFromString(str) {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = str;
    return wrapper.firstElementChild;
  }

# convert stirng into number fastest way using '+' -> let num = +str;

# for set img exactly at center  use below css code
  .img{
  position: absolute;
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
}
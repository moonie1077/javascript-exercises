const container = document.querySelector('#container');

  const p = document.createElement('p');
  p.style.color = 'red';
  p.textContent = "Hey, I'm red!"
container.appendChild(p);

  const h3 = document.createElement('h3');
  h3.style.color = 'blue';
  h3.textContent = "I'm a blue h3!"
container.appendChild(h3);

 const div2 = document.createElement('div');
 div2.style.border = '1px solid black';
 div2.style.backgroundColor = 'pink';

 const h1InDiv = document.createElement('h1');
 h1InDiv.textContent = "I'm in a div"
div2.appendChild(h1InDiv);

 const pInDiv = document.createElement('p');
 pInDiv.textContent = "ME TOO!";
div2.appendChild(pInDiv);

container.appendChild(div2);

const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");

//const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

const containerDiv = document.createElement('div');
containerDiv.className = 'container';


const headingDiv = document.createElement('div');
headingDiv.className = 'heading';

const headingH2 = document.createElement('h2');
headingH2.innerText = 'Time is relative';
headingDiv.appendChild(headingH2);


const image2Div = document.createElement('div');
image2Div.className = 'image2';
const image2Img = document.createElement('img');
image2Img.src = './marvel-miss-minutes-pack2.png';
image2Img.alt = 'no img';
image2Div.appendChild(image2Img);


const image1Div = document.createElement('div');
image1Div.className = 'image1';
const image1Img = document.createElement('img');
image1Img.src = './marvel-miss-minutes-pack1.png';
image1Img.alt = 'no img';
image1Div.appendChild(image1Img);


const clockDiv = document.createElement('div');
clockDiv.className = 'clock';

const hrsSpan = document.createElement('span');
hrsSpan.id = 'hrs';
hrsSpan.innerText = '00';

const minSpan = document.createElement('span');
minSpan.id = 'min';
minSpan.innerText = '00';

const secSpan = document.createElement('span');
secSpan.id = 'sec';
secSpan.innerText = '00';

const colon = document.createElement('span');
colon.id='colon';
colon.innerText=':' 

const col1 = document.createElement('span');
col1.id='col1';
col1.innerText=':' 

clockDiv.appendChild(hrsSpan);
clockDiv.appendChild(colon);
clockDiv.appendChild(minSpan);
clockDiv.appendChild(col1);
clockDiv.appendChild(secSpan);


containerDiv.appendChild(headingDiv);
containerDiv.appendChild(image2Div);
containerDiv.appendChild(image1Div);
containerDiv.appendChild(clockDiv);
document.body.appendChild(containerDiv);



const hours = document.getElementById('hrs');

const min = document.getElementById('min');


const sec = document.getElementById('sec');




setInterval(()=>{
    const date = new Date();
    hours.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();

},1000)




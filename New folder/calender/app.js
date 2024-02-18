
const container = document.createElement('div');
container.className = 'container';

const calendar = document.createElement('div');
calendar.className = 'calendar';

const ldiv = document.createElement('div');
ldiv.className = 'ldiv';

const date = document.createElement('p');
date.id = 'date';
date.textContent = '01';

const day = document.createElement('p');
day.id = 'day';
day.textContent = 'sun';
ldiv.appendChild(date);
ldiv.appendChild(day);

const rdiv = document.createElement('div');
rdiv.className = 'rdiv';

const month = document.createElement('p');
month.id = 'month';
month.textContent = 'jan';

const year = document.createElement('p');
year.id = 'year';
year.textContent = '2020';





const today= new Date();
console.log(today);

const weekdays=["sun","mon","tue","wed","thur","fri","sat"];

const months=["jan","Feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

date.innerHTML=today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=months[today.getMonth()];
year.innerHTML=today.getFullYear();

rdiv.appendChild(month);
rdiv.appendChild(year);

calendar.appendChild(ldiv);
calendar.appendChild(rdiv);
container.appendChild(calendar);


document.body.appendChild(container);
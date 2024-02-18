const Time={
    hrs:"00",
    min:"00",
    sec:"00"

}
const cal={
    date:"01",
    day:"sun",
    month:"jan",
    year:"2020"
}
function updateTime(){
    const weekdays=["sun","mon","tue","wed","thur","fri","sat"];

    const months=["jan","Feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    var obj = new Date();
    Time.hrs = obj.getHours();
    Time.min = obj.getMinutes();
    Time.sec = obj.getSeconds();
    cal.date =obj.getDate();
    cal.day = weekdays[obj.getDay()];
    cal.month=months[obj.getMonth()];
    cal.year=obj.getFullYear();
    render();
}

function render(){
    const root = document.getElementById("root") ;
    root.innerHTML = "" ;
    
    setInterval(updateTime,1000);

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
    hrsSpan.innerText = Time.hrs;
    
    const minSpan = document.createElement('span');
    minSpan.id = 'min';
    minSpan.innerText = Time.min;
    
    const secSpan = document.createElement('span');
    secSpan.id = 'sec';
    secSpan.innerText = Time.sec;
    
    const colon = document.createElement('span');
    colon.id='colon';
    colon.innerText=':' 
    
    const col1 = document.createElement('span');
    col1.id='col1';
    col1.innerText=':'
    
    // calender
    const container = document.createElement('div');
    container.className = 'container1';

    const calendar = document.createElement('div');
    calendar.className = 'calender';

    const ldiv = document.createElement('div');
    ldiv.className = 'ldiv';

    const date = document.createElement('p');
    date.id = 'date';
    date.textContent = cal.date;

    const day = document.createElement('p');
    day.id = 'day';
    day.textContent = cal.day;
    

    const rdiv = document.createElement('div');
    rdiv.className = 'rdiv';

    const month = document.createElement('p');
    month.id = 'month';
    month.textContent = cal.month;

    const year = document.createElement('p');
    year.id = 'year';
    year.textContent = cal.year;


    
    const calheading= document.createElement('div')
    calheading.className="calheading"

    const headcal = document.createElement('h2');
    headcal.innerText = ' 📅 Your calender 📅';
    calheading.appendChild(headcal);

    
    
//clock
    clockDiv.appendChild(hrsSpan);
    clockDiv.appendChild(colon);
    clockDiv.appendChild(minSpan);
    clockDiv.appendChild(col1);
    clockDiv.appendChild(secSpan);


    containerDiv.appendChild(headingDiv);
    containerDiv.appendChild(image2Div);
    containerDiv.appendChild(clockDiv);
    containerDiv.appendChild(image1Div);
//calender
   
    ldiv.appendChild(date);
    ldiv.appendChild(day);
    rdiv.appendChild(month);
    rdiv.appendChild(year);

    calendar.appendChild(ldiv);
    calendar.appendChild(rdiv);
    // container.appendChild(calheading);
    container.appendChild(calendar);
    

    
    root.appendChild(containerDiv);
    root.appendChild(calheading);
    root.appendChild(container);
    // updateTime();

    
}
// setInterval(render,1000);
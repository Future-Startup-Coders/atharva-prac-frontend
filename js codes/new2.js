let player={
        image:"./photos/IMG_20200829_225957_985.jpg",
        name:'Atharva Lonikar',
        rollno:"Software Developer",
        dob:"atharvalonikar95@gmail.com",
        mobile:"8484941103"
    }
let root = document.getElementById('root')

let img=document.createElement('img')
img.setAttribute('src',player.image)
img.setAttribute('alt','no img')
img.className='image'

let Name=document.createElement('h1')
Name.textContent=player.name

let Rollno=document.createElement('h3')
Rollno.textContent=player.rollno

let Dob=document.createElement('p')
Dob.textContent=player.dob

let mobile=document.createElement('p')
mobile.textContent=player.mobile

let maindiv=document.createElement('div')
maindiv.className='main'

let maindiv0=document.createElement('div')
maindiv0.className='main0'



maindiv0.appendChild(img)
maindiv.appendChild(Name)
maindiv.appendChild(Rollno)
maindiv.appendChild(Dob)
maindiv.appendChild(mobile)
root.appendChild(maindiv0)
root.appendChild(maindiv)


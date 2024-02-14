const data={
    selected:'',
    info:{
        1:{
            available:false,
        }
    }
}
for (let i=3;i<=10;i++){}

function render(){
    const root=document.getElementById('root')
    root.innerHTML=''

    const left=document.createElement('div')
    left.className="left"

    for (let i=1;i<=10;i++){
        const button =document.createElement('button')
        button.className='btn'
        button.textContent=i
        
        if (data.selected==button.textContent){
            button.style.backgroundColor='green'
        }
        button.addEventListener('click',()=>{
            data.selected=button.innerText
            render()
        })
        left.appendChild(button)
    }

    const label = document.createElement('h1')
    label.textContent='seat no:'+data.selected
    

    const right =document.createElement('div')
    right.className="right"
    maindiv.appendChild(label)

    const maindiv=document.createElement('div')
    maindiv.className="maindiv"

    maindiv.appendChild(left)
    maindiv.appendChild(right)

    const headline=document.createElement('h1')
    headline.textContent='Booking system'

    root.appendChild(headline)
    root.appendChild(maindiv)
}
render()
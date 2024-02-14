const submitbtn= document.getElementById('btn');
const table =document.getElementById('table');
const input = document.getElementById('task');
const todolist=['watch movie'];


function submit(event){
    event.preventDefault();
    const task=document.getElementById("form").elements[0].value;
    if(task==='' || task.trim()===''){
       alert(`Don't enter the empty string`);
       return ;
    }
    todolist.push(task) ;
    const row= table.insertRow(-1);
    let cell1=row.insertCell(0);
    cell1.innerText=todolist.length;
    let cell2=row.insertCell(1);
    cell2.innerText=todolist[todolist.length-1];
    input.value='';


}



submitbtn.addEventListener("click",submit);
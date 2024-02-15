




    
    const form = document.createElement("form");
    form.method = "post";
    form.id = "form";
  
   
    const input = document.createElement("input");
    input.type = "text";
    input.id = "task";
    input.name = "task";
    input.placeholder = "Enter the task here";
  
    
    const submitbtn = document.createElement("button");
    submitbtn.type = "submit";
    submitbtn.id = "btn";
    submitbtn.textContent = "Submit";
  
    
    form.appendChild(input);
    form.appendChild(submitbtn);
  
    
    const table = document.createElement("table");
    table.border = "black";
    table.id = "table";
  
    
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = "srno.";
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = "task";
  
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    thead.appendChild(headerRow);
  
   
    const tbody = document.createElement("tbody");
  
    
    table.appendChild(thead);
    table.appendChild(tbody);
  
    
    document.body.appendChild(form);
    document.body.appendChild(document.createElement("hr"));
    document.body.appendChild(table);
  
    const todolist = [];
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const task = input.value.trim();
  
      if (task === "") {
        alert("Don't enter an empty string");
        return;
      }
  
      todolist.push(task);
  
      const row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = todolist.length;
      let cell2 = row.insertCell(1);
      cell2.innerText = todolist[todolist.length - 1];
  
      input.value = "";
    });

  
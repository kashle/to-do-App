const addName = () =>{
    // Get the value entered in the input field
    let name = document.getElementById('inputField').value;
    
    // create a div to hold the input value
    let valueCon = document.createElement('div');

    // Set the text content of the new div to the entered name
    valueCon.textContent = name;
    
    let valueEle = document.getElementById('valueEle');
    // Append the new div to the document body
    valueEle.appendChild(valueCon);

  }

  addToDo.addEventListener('click', addName);
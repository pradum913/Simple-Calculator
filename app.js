let clear = document.querySelector(".clear");
let input = document.getElementById("neww");
let button = document.querySelectorAll("button");


for(let i = 0 ; i <button.length; i++) {
    button[i].addEventListener("click" , () => {
        let buttonvalue = button[i].textContent;
        if(buttonvalue==="C") {
           clearcontent();
        } else if(buttonvalue === "=") {
            result();
        } else {
            appendvalue(buttonvalue);
        }
    })
}

function clearcontent() {
    input.value = "";
}

function result() {
    input.value = eval(input.value);
}

function appendvalue(buttonvalue) {
    input.value += buttonvalue;
}
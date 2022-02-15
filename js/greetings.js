const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);



function paintGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function hideLoginForm(){
    loginForm.classList.add(HIDDEN_CLASSNAME); //hide loginForm
}


function onLoginSubmit(event){ //if clicked,
    event.preventDefault();
    hideLoginForm();
    const username = loginInput.value; //get username inputed
    localStorage.setItem("username",username); //store username on localStorage
    paintGreetings(username); //show greeting   
}


if(savedUsername === null){ //if username no exists on localStorage
    loginForm.classList.remove(HIDDEN_CLASSNAME); //show form
    loginForm.addEventListener("submit",onLoginSubmit); 
}else{ //if username exists on localStorage,
    hideLoginForm(); //hide form
    paintGreetings(savedUsername); 
}
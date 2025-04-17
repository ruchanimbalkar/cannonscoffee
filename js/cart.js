const main = document.querySelector("main");//main element
const signUpForm = document.getElementById("signupform"); //Get signup form from cart.html
const containerDiv = document.querySelector(".container-form");//div element
signUpForm.addEventListener("submit", signUpFunction);

function signUpFunction(e){
    e.preventDefault();
    const data = new FormData(signUpForm); //Get form data
    const dataObject = Object.fromEntries(data.entries());//our object is inside dataObject
    console.log(dataObject) //print on console
    //Extract data from dataObject using dot notation
    let fullUserName = dataObject.fullusername;
    console.log("user name : ", fullUserName);
    let signUpEmail = dataObject.email;
    console.log("sign up email: ", signUpEmail);
    let userPassword = dataObject.password;
    console.log("user password", userPassword);

    const welcomeP = document.createElement("p"); //create a new p element for welcome message
    console.log("welcome p",welcomeP);
    let welcomeMessageLiteral = `Welcome ${fullUserName} ! You are logged in!`;
    welcomeP.textContent= welcomeMessageLiteral;
    console.log("changed p",welcomeP);//changed p
    main.appendChild(welcomeP);
    containerDiv.remove(signUpForm)//remove form


}
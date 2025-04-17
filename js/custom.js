/* JavaScript  */
const main = document.querySelector("main");//main element
const comingSoonP= document.querySelector(".coming-soon");
const formContainer = document.querySelector(".form-container");//parent
const formButton = document.querySelector(".click-button");
//const form = document.querySelector("#form");//This is not working
//Creating a dynamic form using this article :
//https://stackoverflow.com/questions/6964927/how-to-create-a-form-dynamically-via-javascript
console.log(formButton);
formButton.addEventListener("click", clickMe);

const form = document.createElement("form");
const pOne = document.createElement("p"); // create a p element for name label and input

const nameLabel = document.createElement("label");//Name label
nameLabel.textContent = "Name: ";
nameLabel.setAttribute("for","username");


const nameInput = document.createElement("input");//Name input
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "username");
nameInput.setAttribute("id", "username");

pOne.appendChild(nameLabel);
pOne.appendChild(nameInput);

const personalFieldset = document.createElement("fieldset");
personalFieldset.textContent="Personal Information";
personalFieldset.appendChild(pOne);

const emailLabel = document.createElement("label")//email label
emailLabel.textContent="Email: ";
emailLabel.setAttribute("for", "email");

const emailInput = document.createElement("input");//email input
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "useremail");
emailInput.setAttribute("id", "email");

const phoneLabel = document.createElement("label")//phone label
phoneLabel.textContent="Phone: ";
phoneLabel.setAttribute("for", "phone");

const phoneInput = document.createElement("input");//phone input
phoneInput.setAttribute("type", "tel");
phoneInput.setAttribute("name", "userphone");
phoneInput.setAttribute("id", "phone");
phoneInput.setAttribute("pattern","[0-9]{3}-[0-9]{3}-[0-9]{4}");


const emailP = document.createElement("p"); //create a p element for email label and input
emailP.appendChild(emailLabel);
emailP.appendChild(emailInput);

const phoneP = document.createElement("p"); // create a p element for phone label and input
phoneP.appendChild(phoneLabel);
phoneP.appendChild(phoneInput);

const contactFieldSet = document.createElement("fieldset");//create a fieldset for contact info.
contactFieldSet.textContent="Contact Information"
contactFieldSet.appendChild(emailP); //append emailP to contact Fieldset
contactFieldSet.appendChild(phoneP); // append phoneP to contact Fieldset

const commentLabel = document.createElement("label");
commentLabel.textContent = "Comments:";
commentLabel.setAttribute("for","comments");

const commentTextArea = document.createElement("textarea");
commentTextArea.setAttribute("id", "comments");
commentTextArea.setAttribute("name", "comment");
//commentTextArea.setAttribute("rows" , 50);

const commentP = document.createElement("p");
commentP.appendChild(commentLabel);
commentP.appendChild(commentTextArea);

const feedbackFieldset = document.createElement("fieldset"); //create a fieldset for comment
feedbackFieldset.textContent = "Additional Comments";
feedbackFieldset.appendChild(commentP);

const selectFlavorLabel = document.createElement("label");
selectFlavorLabel.textContent = "Choose your favorite coffee flavor: ";
selectFlavorLabel.setAttribute("for","flavor");

const selectFlavor = document.createElement("select");
selectFlavor.setAttribute("name", "flavor");
const selectOption =  document.createElement("option");
selectOption.textContent = "----Select a  Flavor----" ;
//Sorry I am not a cofffee person so I thought of the following flavors
const optionChocolate =  document.createElement("option");
optionChocolate.textContent = "Chocolate Flavor";
const optionMocha = document.createElement("option");
optionMocha.textContent = "Mocha Flavor";
const optionFrappy = document.createElement("option");
optionFrappy.textContent = "Frappachino Flavor";

selectFlavor.appendChild(selectOption);
selectFlavor.appendChild(optionChocolate);
selectFlavor.appendChild(optionMocha);
selectFlavor.appendChild(optionFrappy);

const selectFlavorP = document.createElement("p");
selectFlavorP.appendChild(selectFlavorLabel);
selectFlavorP.appendChild(selectFlavor);

const flavorFieldset = document.createElement("fieldset"); //create a fieldset for flavor
flavorFieldset.textContent="Coffee Flavors";
flavorFieldset.appendChild(selectFlavorP);


const radioFieldset = document.createElement("fieldset"); //create a fieldset for employment radio input
radioFieldset.textContent = "What are you looking for?"

const addForEmploymentLabel = document.createElement("label");
addForEmploymentLabel.textContent = "Seeking Employment";
addForEmploymentLabel.setAttribute("for","jobradio");
const jobRadioInput = document.createElement("input");
jobRadioInput.setAttribute("type","radio");
jobRadioInput.setAttribute("id","jobradio");
jobRadioInput.setAttribute("name","radio");
jobRadioInput.setAttribute("value","Seeking Employment");
addForEmploymentLabel.appendChild(jobRadioInput);

const buyingCoffeeLabel = document.createElement("label");
buyingCoffeeLabel.textContent = "Buying Coffee";
buyingCoffeeLabel.setAttribute("for","forcoffee");
const coffeeInput = document.createElement("input");
coffeeInput.setAttribute("type","radio");
coffeeInput.setAttribute("id","forcoffee");
coffeeInput.setAttribute("name", "radio");
coffeeInput.setAttribute("value", "Buying Coffee");
buyingCoffeeLabel.appendChild(coffeeInput);

radioFieldset.appendChild(addForEmploymentLabel);
radioFieldset.appendChild(buyingCoffeeLabel);

const submitButton = document.createElement("input");//submit button
submitButton.classList.add("button2");
submitButton.setAttribute("type","submit");
submitButton.setAttribute("value", "submit");


form.appendChild(personalFieldset);//add personal fieldset to the form
form.appendChild(contactFieldSet);//add contact fieldset to the form
form.appendChild(feedbackFieldset);//add feedback fieldset to the form
form.appendChild(flavorFieldset);// add flavor fielset to the form
form.appendChild(radioFieldset);//add radio fielset to the form
form.appendChild(submitButton);

console.log(form);

function clickMe(){
    console.log("Form Button was clicked",formButton);
    main.removeChild(comingSoonP); // remove the coming soon p element from main element
    formContainer.removeChild(formButton);//remove the click form button from the parent
    //form.classList.remove("display-none"); //make form visible by removing the class;
    formContainer.appendChild(form);
    form.addEventListener("submit", onSubmit);
}

function onSubmit(e){
    e.preventDefault();
    const data = new FormData(form); //Get form data
    const dataObject = Object.fromEntries(data.entries());//our object is inside dataObject
    console.log(dataObject) //print on console
    //Extract data from dataObject using dot notation
    let userName = dataObject.username;
    console.log("user name : ", userName);
    let userEmail = dataObject.useremail;
    console.log("user email : ", userEmail);
    let userPhone = dataObject.userphone;
    console.log("user phone :", userPhone);
    let userComment = dataObject.comment;
    console.log("user comment : ", userComment);
    let coffeeFlavor = dataObject.flavor;
    console.log("coffee flavor : ", coffeeFlavor);
    let userChoice = dataObject.radio;
    console.log("user choice : ",userChoice);

    let messageLiteral = `Thank you for your interest ${userName}. 
    We have saved your information in our records. For your email address we have ${userEmail}. For your phone number
    we have ${userPhone}. Your comment was : ${userComment}. Your favorite coffee flavor is ${coffeeFlavor}. Your are ${userChoice}.`;
    const messageP = document.createElement("p"); //create a new p element for message
    console.log("message p",messageP);
    messageP.textContent=messageLiteral;
    console.log("changed p",messageP);//changed p
    main.appendChild(messageP);
    form.reset(); // not sure about this
    //form.classList.add("display-none"); //hide the form
    formContainer.remove(form); //remove form from the div form container
  

}


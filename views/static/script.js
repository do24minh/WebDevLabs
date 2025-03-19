// Lab 3
var x=5;
var y=7; 
var z=x+y;
console.log(z);
var A="Hello ";
var B="world!";
var C=A.concat(B);
console.log(C);


function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log("The sum is:", x3);
}


if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function findTheBanana(L)
{
    L.forEach((element, index)=>
    {
        if(element==="Banana")
        {
            alert("We found a banana in the array");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc()
{
    var d = new Date();
    var h= d.getHours();
    var greeting = document.getElementById('greeting');

    if(h<5)
    {
        greeting.innerHTML="Good evening, my name is Minh Do";
    }
    else if(h<12)
    {
        greeting.innerHTML="Good morning, my name is Minh Do";
    }
    else if(h<18)
    {
        greeting.innerHTML="Good afternoon, my name is Minh Do";
    }
    else if(h<20)
    {
        greeting.innerHTML="Good evening, my name is Minh Do";
    }
    else if(h<24)
    {
        greeting.innerHTML="Good evening, my name is Minh Do";
    }
}

greetingFunc(); 

// Lab 4
function addYear() {
    const currentYear = new Date().getFullYear();
    const copyYearElement = document.getElementById("copyYear");
    if (copyYearElement) {
        copyYearElement.textContent = `© ${currentYear} Minh Nguyen Do. All rights reserved.`;
    }
}

function showList() {
    const list = document.getElementById("funList");
    const button = document.getElementById("showListButton");
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
    }
    button.style.display = "none";
}

$(document).ready(function () {
    $("#readLessButton").hide();

    $("#readMoreButton").click(function () {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMoreButton").hide();
        $("#readLessButton").show();
    });

    $("#readLessButton").click(function () {
        $("#fullBio").hide();
        $("#shortBio").show();
        $("#readLessButton").hide();
        $("#readMoreButton").show();
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    // Validate name
    if (!name.checkValidity()) {
        nameError.textContent = "Please enter your name.";
    }
    // Validate email
    if (!email.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
    }
    // Validate message
    if (!message.checkValidity()) {
        messageError.textContent = "Please enter a message.";
    }
    // If all fields are valid, submit the form
    if (name.checkValidity() && email.checkValidity() && message.checkValidity()) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form
    }
});
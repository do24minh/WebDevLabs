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
let input1=document.getElementById("textInput");
let input2=document.getElementById("textPassword");
let button=document.getElementById("btn");
let span1=input1.nextElementSibling;
let span2=input2.nextElementSibling;


// button.addEventListener("click",function(){
//      if(input1.value=="" || input2.value ==""){
//          alert("bos buraxmayin");
//         }
//     else{
//         alert("login oldunuz");
//     }

//     let span=document.createElement("span");
//     span.appendChild(span);


//  })

button.addEventListener("click", function(e){
    e.preventDefault();
    if(input1.value==""){
        span1.style.display="block";
    }
    else{
        span1.style.display="none";
    }

    if(input2.value==""){
        span2.style.display="block";
    }
    else{
        span2.style.display="none";
    }

    if(input1.value!="" && input2.value!=""){
        alert("login oldunuz");
    }
})

let icon=document.querySelector("i");
icon.addEventListener("mousedown",function(e){
    input2.type="text"

})





const btns=document.querySelectorAll("button");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        let input=document.getElementById("inputBox").value;
        let btnText=btns[i].innerText;
        if(btnText=="AC"){
            input="";
        }
        else if(btnText=="C"){
            input=input.substr(0,input.length-1);
        }
        else if(btnText=="="){
            input=eval(input);
        }
        else{
            input+=btnText;
        }
        document.getElementById("inputBox").value=input;
    });
}

function handleKeyEvent(e) {
    if (e.key === "Enter") {
        try {
            inputBox.value = eval(inputBox.value);
        } catch (error) {
            inputBox.value = "Error";
        }
    } else if (e.key === "Escape") {
        inputBox.value = "";
    } else if (e.key === "Backspace") {
        inputBox.value = inputBox.value.substr(0, inputBox.value.length - 1);
    }
}

document.addEventListener("keydown", handleKeyEvent);
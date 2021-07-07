var screen = document.getElementById("screen");
    buttons = document.querySelectorAll("button");
var screenValue = "";
for(ami of buttons){
    ami.addEventListener("click", (l)=>{
        buttonText = l.target.innerText;
        if (buttonText == "X"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
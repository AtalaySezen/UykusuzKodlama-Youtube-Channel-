let buttonRed = document.getElementById("btn-red");
let buttonBlue = document.getElementById("btn-blue");
let buttonBlack = document.getElementById("btn-black");


buttonRed.addEventListener("click",()=>{
    document.body.style.background = "red";
    localStorage.setItem("bg","red");
})

buttonBlue.addEventListener("click",()=>{
    document.body.style.background = "blue";
    localStorage.setItem("bg","blue");
})

buttonBlack.addEventListener("click",()=>{
    document.body.style.background = "black";
    localStorage.setItem("bg","black");
})

function storageBackground(){
    if(localStorage.getItem("bg")!=""){
        document.body.style.background = localStorage.getItem("bg");
    }else{
        return true;
    }
}

storageBackground();
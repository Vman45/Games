var calculate  = document.getElementById("calculate");
var tryAgain = document.getElementById("tryAgain");

function calculator(){
    var you = document.getElementById("you").value;
    var she = document.getElementById("she").value;
    var loveForm = document.getElementById("loveForm");
    var loveDescription = document.getElementById("loveDescription");
    var lovePercentage = document.getElementById("lovePercentage");
    var love = Math.floor(Math.random()*100+1);


    if( you==="" && she===""){
        alert("Please enter NAMES ")
    }else if(you===""){
        alert("Please enter YOUR NAME")
    }else if(she===""){
        alert("Please enter HER/HIS NAME")
    }else{
        
        lovePercentage.innerText = `${love}%`;
        loveDescription.style.display = "none";
        lovePercentage.style.height = "100%"
        tryAgain.style.height = "100%"
        tryAgain.style.display = "block";
        lovePercentage.style.display = "block";

        loveForm.reset()
    };
};

calculate.addEventListener('click',function (e){
    e.preventDefault();
    calculator()
})
tryAgain.addEventListener('click',function(){
    loveDescription.style.display = "block";
    tryAgain.style.display = "none";
    lovePercentage.style.display = "none";
    lovePercentage.innerText = "";
})
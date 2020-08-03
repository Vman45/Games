var calculate  = document.getElementById("calculate");

function calculator(){
    var you = document.getElementById("you").value;
    var she = document.getElementById("she").value;
    var loveForm = document.getElementById("loveForm");
    var love = Math.floor(Math.random()*100+1);
    if( you==="" && she===""){
        alert("Please enter NAMES ")
    }else if(you===""){
        alert("Please enter YOUR NAME")
    }else if(she===""){
        alert("Please enter HER/HIS NAME")
    }else{
        console.log(love);
        loveForm.reset()
    };
};

calculate.addEventListener('click',function (e){
    e.preventDefault();
    calculator()
})
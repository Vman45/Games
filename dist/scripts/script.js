var calculate  = document.getElementById("calculate");

function calculator(){
    var love = Math.floor(Math.random()*100+1);
    console.log(love)
};

calculate.addEventListener('click',function (e){
    e.preventDefault();
    calculator()
})
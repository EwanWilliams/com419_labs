// question 1 buttons
document.getElementById("notlook").addEventListener("click", e=>{
    document.getElementById("question1").style.display = "none";
    document.getElementById("answer").innerHTML = "You are probably not a Dragonborn";
    document.getElementById("answer").style.display = "block";
});

document.getElementById("ignorefear").addEventListener("click", e=>{
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
});


// question 2 buttons
document.getElementById("scary").addEventListener("click", e=>{
    document.getElementById("question2").style.display = "none";
    document.getElementById("answer").innerHTML = "You are probably not a Dragonborn";
    document.getElementById("answer").style.display = "block";
});

document.getElementById("nicesouls").addEventListener("click", e=>{
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
});


// question 3 buttons
document.getElementById("funny").addEventListener("click", e=>{
    document.getElementById("question3").style.display = "none";
    document.getElementById("answer").innerHTML = "You are probably not a Dragonborn";
    document.getElementById("answer").style.display = "block";
});

document.getElementById("blasted").addEventListener("click", e=>{
    document.getElementById("question3").style.display = "none";
    document.getElementById("answer").innerHTML = "Congratulations you could be a Dragonborn!";
    document.getElementById("answer").style.display = "block";
});
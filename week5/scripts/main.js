document.getElementById("nobtn").addEventListener("click", e=>{
    document.getElementById("dragonborn_banner").style.display = "none";
});

document.getElementById("yesbtn").addEventListener("click", e=>{
    document.querySelector("#dragonborn_banner h3").innerHTML = "Congratulations";
    document.querySelector("#dragonborn_banner p").innerHTML = "Visit Skyrim now and we will set a dragon on you free of charge!";
    document.getElementById("yesbtn").style.display = "none";
    document.getElementById("nobtn").innerText = "Yay!";
});
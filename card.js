const toggleSwitch = document.getElementById("toggle")
const Annually = document.querySelector(".card");
const Monthly = document.querySelector(".card-monthly");
const Annual = document.querySelector(".annual");
const month = document.querySelector(".month");

toggleSwitch.addEventListener('change', () => {
    if(toggleSwitch.checked){
        Annually.style.display = "none";
        Monthly.style.display= 'flex';
        month.style.color = "hsl(237, 63%, 64%)";
        Annual.style.color = "hsl(232, 13%, 33%)";
        console.log("Monthly");
    }else{
        Annually.style.display = "flex";
        Monthly.style.display= 'none';
        Annual.style.color = "hsl(237, 63%, 64%)";
        month.style.color = "hsl(232, 13%, 33%)";
        console.log("Annually");
    }
})
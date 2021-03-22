const bank = document.getElementById("bank")
const skill = document.getElementById("skill");
const age = document.getElementById("age");
const workBtn = document.getElementById("work");
const investBtn = document.getElementById("invest");
const studyBtn = document.getElementById("study");
const growBtn = document.getElementById("grow");
function GameLoop(){
    let age_now = parseInt(age.innerText.valueOf());
    if(age_now < 18){
        workBtn.disabled = true;
        investBtn.disabled = true;
    } else {
        workBtn.disabled = false;
        investBtn.disabled = false;
    }

    if(age_now < 6){
        studyBtn.disabled = true;
    } else {
        studyBtn.disabled = false;
    }

    if(age > 24){
        growBtn.disabled = true;
    }

    if(age_now >= 100){
        workBtn.disabled = true;
        investBtn.disabled = true;
        studyBtn.disabled = true;
        growBtn.disabled = true;
    }
}

setInterval(GameLoop,1000/80);

function work(){
    let newbank = skill.innerText.valueOf() * 5000 + 50;
    bank.innerText = parseInt(newbank) + parseInt(bank.innerText.valueOf());
    birthday();
}

function study(){
    skill.innerText = parseInt(skill.innerText.valueOf()) + 1;
    birthday();
}

function grow(){
    birthday();
}

function birthday(){
    bank.innerText = Math.round(parseInt(bank.innerText.valueOf()) * 0.98);
    age.innerText = parseInt(age.innerText.valueOf()) + 1;
}

function invest(){
    bank.innerText = Math.round(parseInt(bank.innerText.valueOf()) * 1.055);
    birthday();
}
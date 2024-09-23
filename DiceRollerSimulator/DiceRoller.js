var degrees = 360;
let rollButton = document.getElementById("roll");
rollButton.addEventListener("click", () => {
    rollingDiceY();
})

rollButton.addEventListener("click", () => {
    let cnt = Math.round(Math.random() * 5 + 1);
    setTimeout(function () { getValue(cnt); }, 500)

})



function getValue(cnt) {
    console.log(cnt);
    switch (cnt) {
        case 1:
            createDots(cnt);
            break;
        case 2:
            createDots(cnt);
            break;
        case 3:
            createDots(cnt);
            break;
        case 4:
            createDots(cnt);
            break;
        case 5:
            createDots(cnt);
            break;
        case 6:
            createDots(cnt);
            break;
    }
}
function createDots(cnt) {
    let display = document.getElementById("roller");
    switch (cnt) {
        case 1: {

            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>"
        }
            break;
        case 2: {

            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }
            break;
        case 3: {


            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }

            break;
        case 4: {
            let h = document.getElementById("roller");
            h.style.gridTemplateColumns = "repeat(2,5fr)";
            h.style.gridTemplateRows = "repeat(2,5fr)";
            h.style.gap = '20px'
            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br> <br>"
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;  &nbsp;   "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }

            break;
        case 5:
            {
                let h = document.getElementById("roller");
                h.style.gridTemplateColumns = "repeat(2,5fr)";
                h.style.gridTemplateRows = "repeat(2,5fr)";
                h.style.gap = '20px'
                document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;   &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>  "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
            }
            break;
        case 6:
            {
                let h = document.getElementById("roller");
                h.style.gridTemplateColumns = "repeat(2,5fr)";
                h.style.gridTemplateRows = "repeat(2,5fr)";
                h.style.gap = '20px'
                document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;   &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>  "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> " + "&nbsp; &nbsp;  &nbsp;  &nbsp; "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;  &nbsp;  &nbsp;   &nbsp;";
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
            }
            break;
    }

}
function rollingDiceX() {
    let dice = document.getElementById("roller");
    dice.style.transform = "rotateX(360deg)";
    dice.style.transition = "1s"


}
function rollingDiceY() {
    let dice = document.getElementById("roller");
    degrees += 360;
    dice.style.transform = `rotateY(${degrees}deg)`;
    dice.style.transition = "1s";


}
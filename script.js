function main(){
    let confirm = document.getElementById('mrsg').innerHTML;
    if (confirm == "You Lost!") {
        alert("Game over! Please restart the game");
    } else {

        let x;
        do {
            x = Math.floor(Math.random() * 100/7.6923076923076923076923076923077);
        } while (x == 0);
        
        let currentTT = parseInt(document.getElementById('result').innerHTML);
        let total = currentTT + x;
        document.getElementById('result').innerHTML = total;
        
        if (total < 21) {
            document.getElementById('mrsg').innerHTML = "Generate Another card"
        } else if (total == 21) {
            document.getElementById('mrsg').innerHTML = "You Win!"
            alert("Congratulations, you won!")
            document.getElementById('btnres').style.display = "block";
        } else if (total > 21) {
            document.getElementById('mrsg').innerHTML = "You Lost!"
            alert("Sorry, you lost! Click Reastart")
            document.getElementById('btnres').style.display = "block";
        }
        
        var img = document.createElement("img");
        img.src = "img/" + x + ".png";
        img.height = 150;
        
        document.body.appendChild(img);
    }
}

function restart() {
    location.reload();
}
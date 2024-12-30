console.log("bonus");
const homeCounter = document.getElementById("home-counter") as HTMLInputElement | null;
const awayCounter = document.getElementById("away-counter") as HTMLInputElement | null;
document.getElementById("reset")?.addEventListener("click", resetScore);


function resetScore(): void {
    if (homeCounter && awayCounter) {
        scoreHome = 0
        scoreAway = 0
        homeCounter.value = "0";
        awayCounter.value = "0";
    }
}

//geht deutlich kürzer aber kb mehr 
let scoreHome = 0
let scoreAway = 0
document.getElementById("plus1-home")?.addEventListener("click", function(){
    scoreHome++
    if (homeCounter) {
        homeCounter.value = String(scoreHome);
    }
});
document.getElementById("plus2-home")?.addEventListener("click", function(){
    scoreHome = scoreHome + 2
    if (homeCounter) {
        homeCounter.value = String(scoreHome);
    }
});
document.getElementById("plus3-home")?.addEventListener("click", function(){
    scoreHome = scoreHome + 3
    if (homeCounter) {
        homeCounter.value = String(scoreHome);
    }
});

document.getElementById("plus1-away")?.addEventListener("click", function(){
    scoreAway++
    if (awayCounter) {
        awayCounter.value = String(scoreAway);
    }
});
document.getElementById("plus2-away")?.addEventListener("click", function(){
    scoreAway = scoreAway + 2
    if (awayCounter) {
        awayCounter.value = String(scoreAway);
    }
});
document.getElementById("plus3-away")?.addEventListener("click", function(){
    scoreAway = scoreAway + 3
    if (awayCounter) {
        awayCounter.value = String(scoreAway);
    }
});

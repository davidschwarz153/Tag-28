console.log("bonus");
const homeCounter = document.getElementById("home-counter") as HTMLInputElement | null;
const awayCounter = document.getElementById("away-counter") as HTMLInputElement | null;
document.getElementById("reset")?.addEventListener("click", resetScore);


function resetScore(): void {
    if (homeCounter && awayCounter) {
        homeCounter.value = "0";
        awayCounter.value = "0";
    }
}

//geht deutlich kürzer aber kb mehr 
let score = 0
document.getElementById("plus1-home")?.addEventListener("click", function(){
    score++
    if (homeCounter) {
        homeCounter.value = String(score);
    }
});
document.getElementById("plus2-home")?.addEventListener("click", function(){
    score = score + 2
    if (homeCounter) {
        homeCounter.value = String(score);
    }
});
document.getElementById("plus3-home")?.addEventListener("click", function(){
    score = score + 3
    if (homeCounter) {
        homeCounter.value = String(score);
    }
});

document.getElementById("plus1-away")?.addEventListener("click", function(){
    score++
    if (awayCounter) {
        awayCounter.value = String(score);
    }
});
document.getElementById("plus2-away")?.addEventListener("click", function(){
    score = score + 2
    if (awayCounter) {
        awayCounter.value = String(score);
    }
});
document.getElementById("plus3-away")?.addEventListener("click", function(){
    score = score + 3
    if (awayCounter) {
        awayCounter.value = String(score);
    }
});

//
function showPersonInfo(name: string, city: string, age: number){
    console.log(`Hallo mein Name ist ${name}. Ich bin ${Math.round(age)} Jahre alt. Ich komme aus ${city}.`);
}
showPersonInfo("David","Edenkoben",24)
//
function multiplyAndDivide(num1:number, num2:number){
    if (num2 > 0) {
        console.log(num1*num2);
        console.log(num1/num2);
    } else {
        console.log("Division durch 0 nicht erlaubt");
    }
}
multiplyAndDivide(10,2)
multiplyAndDivide(2,0)
//
function intro(){
    console.log("Hello Function");
}
const hello = () => console.log("Hello Arrow");
intro()
hello()
//
function showHero(heroName:string,heroPower:string,heroEnemy:string): void{
    const nameOutput = "Mein Lieblingsheld ist: " + heroName
    const powerOutput = "Er hat die Fähigkeit: " + heroPower
    const enemyOutput = "Sein größter Gegner ist: " + heroEnemy
    console.log(nameOutput + powerOutput + enemyOutput);
}
showHero("held","power","gegner")
//
function returnOne(){
    return 1
}
let x = 1
let y = returnOne()
if (x === y) {
    console.log("wird das gedruckt?");
}
//
function one(param:number) {
    return param * 2;
}
console.log(one(34.5));
//
function ageCalc(birthYear:number){
    return 2024 - birthYear
}
console.log(ageCalc(2000));

function ageCom(age1:number, age2:number){
    return ageCalc(age1) - ageCalc(age2)
}
console.log(ageCom(1995,2000));
//
function level1_9(vorname:string, nachname:string,geburtsort:string,alter:number,wohnort:string){
    console.log(`Mein Name ist ${vorname} ${nachname}.  Ich bin in ${geburtsort} geboren.  Ich lerne bei SuperCode.  Ich bin ${alter} Jahre alt.  Ich wohne in ${wohnort}.`);
}
level1_9("Aurora","Stardust","New York", 20, "Celestia")

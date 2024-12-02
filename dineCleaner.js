console.log("Script Connected to Browser..........");
console.log("Writing in logs!!!!!!!!!!!!!!!!!!!!!");

let clean_stats = false;
let cleaned = true;
const table = document.querySelector(".table");
const chairs = document.querySelector(".c");
const chairs2 = document.querySelector(".chairs2");
const status_txt = document.querySelector("#status");
const csv_url = "./assets/data/data.csv"



if (clean_stats) {
  status_txt.innerText = "Cleaning";
} 
else {
    status_txt.innerText = "Diners on Board";
    table.style.backgroundColor = "grey"
}

if(cleaned){
    table.style.backgroundColor = "lime"
    status_txt.innerText = "Ready!";
}
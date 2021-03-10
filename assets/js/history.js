var pastSearches = [];

if (localStorage["pastSearches"]) {
    pastSearches = JSON.parse(localStorage["pastSearches"]);
}
//when the array lenght reaches 5 it will drop the oldest search
function addToHistory(search){
if (pastSearches.indexOf(search) == -1) {
    pastSearches.unshift(search);
    if(pastSearches.lenght > 5){
        pastSearches.pop();
    }
    drawPastSearches();
    localStorage["pastSearches"] = JSON.stringify(pastSearches);
}}
function drawPastSearches(){
    if (pastSearches.length) {
     var recentHistory = document.querySelector("#history")
     recentHistory.innerHTML=('');
     for (var i = 0; i < pastSearches.length; i++){
         console.log(pastSearches[i]);
         var option= document.createElement("option");
         option.setAttribute("value", pastSearches[i]);
         recentHistory.appendChild(option);
     }
        // var html = pastSearchesTemplate({search:pastSearches});
        // $("pastSearches").html(html);
    }
}
drawPastSearches();
let div = document.querySelector("div");
let ul = document.querySelector("div");
let lis = document.querySelectorAll("div");

div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
li.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("li was clicked");
});
};
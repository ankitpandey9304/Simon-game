let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value ="";
});
// but it is not work on new item add(for same item)

// let delbtns = document.querySelectorAll(".delete"); 
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

//Event delegation(same function work on new item add (for same item)) we want all property work on new item
ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName);
    if(event.target.nodeName ==="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        // console.log("delete");
    }

})
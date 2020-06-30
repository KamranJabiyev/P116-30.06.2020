// let div=document.getElementById("test")
// div.innerText="<b>P116</b>"
// div.innerHTML="<b>P116</b>"
// console.log(div)
// let allElm=document.getElementsByClassName("elem");
// console.log(allElm)
// let AllDiv=document.getElementsByTagName("div");
// let count=0;
// for (const div of AllDiv) {
//     count++;
//     div.innerText=count;
// }
// let test=document.querySelector(".elem");
// console.log(test)

// let allElm=document.querySelectorAll(".elem");
// console.log(allElm)

// function MakeAlert(){
//     alert("Salam P116")
// }

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//     alert("Salam")
// }



// btn.addEventListener("click",function(){
//     alert("Salam P116")
// })

// btn.onclick = function () {
//     alert("Sagol P116")
// }

// btn.addEventListener("click",function(){
//     alert("SagolP116")
// })

// let btn = document.getElementById("btn");
// let p=document.querySelector("#test p");

// btn.addEventListener("click",function(){
//     // p.style.color="red";
//     // p.style.backgroundColor="yellow";
//     // p.className="test"
//     // p.classList.add("test","xxx")
//     // console.log(p.classList.contains("test"))
//     // p.classList.remove("default")
//     p.classList.toggle("color")
// })

//PRACTICE

let input = document.getElementById("text");
let addList = document.getElementById("addList");
let parentUl = document.getElementById("parentUl");
let removeAll = document.getElementById("removeAll");

addList.addEventListener("click", function () {
    if (input.value == "") {
        alert("Bosh buraxmayin");
        return;
    }
    let text = input.value.trim();
    let li = document.createElement("li");
    li.innerText = text;
    li.className = "list-group-item test";
    // li.onclick=function(){
    //     this.remove();
    // }
    li.onclick = function () {
        this.classList.toggle("active");
    }
    parentUl.appendChild(li);
    // parentUl.innerHTML+=`<li class="list-group-item">${text}</li>`;
    input.value = "";
})

removeAll.onclick = function () {
    parentUl.innerHTML = "";
    let children = document.querySelectorAll("#parentUl li")
    for (const li of children) {
        li.remove();
    }
}

document.getElementById("removeLast").onclick = function () {
    parentUl.lastChild.remove();
}

document.getElementById("removeSelected").onclick = function () {
    let allSelected = document.querySelectorAll(".active");
    allSelected.forEach(elm => elm.remove());
}
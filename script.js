console.log("Hello world!");

function join(){
    var element = document.querySelector("#join");
    element.remove();
}

function search(){
    var element = document.querySelector("#search");
    alert(element.value);
}

function like(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerText);
    element.innerText = count + 1;
}
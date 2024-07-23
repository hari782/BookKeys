var ol = document.querySelector(".overlay");
var p = document.querySelector(".popupcard");
var b = document.getElementById("btn");
b.addEventListener("click", function(){
    ol.style.display = "block";
    p.style.display = "block";
});
var can = document.getElementById("cancel");
can.addEventListener("click", function(event){
    event.preventDefault();
    ol.style.display = "none";
    p.style.display = "none";
});
var con = document.getElementById("book-list");
var addb = document.getElementById("add");
var bt = document.getElementById("booktitle");
var ba = document.getElementById("bookauthor");
var bd = document.getElementById("bookdescription");

addb.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "col-md-4");
    div.innerHTML = `
        <div class="card text-white bg-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">${bt.value}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ba.value}</h6>
                <p class="card-text">${bd.value}</p>
                <button class="btn btn-danger" onclick="delet(event)">Delete</button>
            </div>
        </div>`;
    con.appendChild(div);
    ol.style.display = "none";
    p.style.display = "none";
});

function delet(event) {
    event.target.closest(".col-md-4").remove();
}

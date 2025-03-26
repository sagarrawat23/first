var Nodelist = document.getElementsByTagName("LI");
var i;
for(i=0;i<Nodelist.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    Nodelist[i].appendChild(span);
}

/* cut*/
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display ="none";
    }
}
// add checked
var list= document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("ip").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue ===''){
        alert("write something YOU");
    }else{
        document.getElementById("list").appendChild(li);
    document.getElementById("ip").value = "";}
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

var close = document.getElementsByClassName("close");
for( var i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display ="none";
    }
}
}

document.getElementById("btn2").addEventListener("click", function() {
    var ul = document.getElementById("list");

    if (ul.children.length === 0) {
        alert("The list is already empty!");
    } else {
        ul.innerHTML = ""; 
    }
});



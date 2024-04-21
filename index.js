let lists = document.getElementsByClassName("list");

let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");

for(l of lists){
    l.addEventListener("dragstart",function(event){
        let selected = event.target;

        rightbox.addEventListener("dragover",function(event){
            console.log(event.target);
            event.preventDefault();
        });
        rightbox.addEventListener("drop",function(event){
            rightbox.appendChild(selected);
            selected = null;
        });
        leftbox.addEventListener("dragover",function(event){
            console.log(event.target);
            event.preventDefault();
        });
        leftbox.addEventListener("drop",function(event){
            leftbox.appendChild(selected);
            selected = null;
        });
    })
};

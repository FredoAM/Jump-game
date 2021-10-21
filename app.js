var toon = document.getElementById("toon");
var tree = document.getElementById("tree");
var counter=0;
function jump(){
    if(toon.classList == "animate"){return}
    toon.classList.add("animate");
    setTimeout(function(){
        toon.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let toonTop = parseInt(window.getComputedStyle(toon).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if(treeLeft<20 && treeLeft>-20 && toonTop>=130){
        tree.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        tree.style.animation = "tree 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
function next(){
    var a =document.getElementById("words01");
    var b =document.getElementById("words02");
    var c =document.getElementById("words03");
    var d =document.getElementById("words04");
    var e =document.getElementById("continue");
    var n =document.getElementById("box2");
    var x = 1;
    if(d.style.display == "block"){
        e.style.display= "block";
        e.style.animation = "move5 2s";
        n.style.display = "block";
    }
    if(c.style.display == "block"){
        d.style.display= "block";
        d.style.animation = "move4 2s";
    }
    if(b.style.display == "block"){
        c.style.display= "block";
        c.style.animation = "move3 2s";
    }
    if(a.style.display == "block"){
        b.style.display= "block";
        b.style.animation = "move2 2s";
    }
    if(x == 1){
        a.style.display= "block";
        a.style.animation = "move1 2s";
    }
}
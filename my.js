// window.onload = start;
// 				function start(){
// 					var box = document.getElementById("box");
// 					 var body = document.getElementsByTagName('body')[0];
// 					 var height =  body.clientHeight;
// //					alert(height);
// 					document.getElementById("box").style.width = height*6.25 + "vw";
// 				}

//                 (function () {
//                     function resize() {
//                       var body = document.getElementsByTagName('body')[0];
//                       var html = document.getElementsByTagName('html')[0];
//                       var width = html.clientWidth;
//                       var height =  html.clientHeight;
//                       var max = width > height ? width : height;
//                       var min = width > height ? height : width;
//                       body.style.width = max + "px";
//                       body.style.height = min + "px";
//               //      var height = document.getElementById("box").style.height;
//               //      console.log(height);
//               //		document.getElementById("box").style.width = height*6.25 + "px";
//                     }
//                     resize();
//                     window.addEventListener("resize", resize)
//                   })();


window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep1');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';

        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep2');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep3');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep4');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep5');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

window.addEventListener('DOMContentLoaded',function(){
    var oDiv=document.getElementById('sheep6');
    var next=document.getElementById('arrow2');
    oDiv.addEventListener('touchstart',function(ev){
        var l=0;
        var t=0;
        var oldL=oDiv.offsetLeft;
        var oldT=oDiv.offsetTop;
        var oldX=ev.targetTouches[0].pageX;
        var oldY=ev.targetTouches[0].pageY;
        function move (ev){
            l=ev.targetTouches[0].pageX-oldX;
            t=ev.targetTouches[0].pageY-oldY;
            oDiv.style.WebkitTransform='translate('+l+'px,'+t+'px)';
        }
        function end(){
            oDiv.style.top=oldT+t+'px';
            oDiv.style.left=oldL+l+'px';
            oDiv.style.WebkitTransform='';

            oDiv.removeEventListener('touchmove',move,false);
            oDiv.removeEventListener('touchend',end,false);
            next.style.display='block';
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)

// var arrow = document.getElementById('arrow');
// arrow.addEventListener('dragenter',function(){
//     alert('111');
// })
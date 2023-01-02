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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }

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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }
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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }
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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }
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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }
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
            if((oDiv.style.top <= 40 + 'vh')&&(oDiv.style.left >= 70 + 'vw')){
                next.style.display='block';
            }
        }
        oDiv.addEventListener('touchmove',move,false);
        oDiv.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
},false)


var s=1;
var a=1;
var b=1;
var c=1;
var d=1;

// 改变款式s
function sweaterChange(){
    var s1 = document.getElementById('sweater1');
    var s2 = document.getElementById('sweater2');
    var s3 = document.getElementById('sweater3');
    var s4 = document.getElementById('sweater4');
    if(s==1){
        s1.style.display = 'none';
        s2.style.display = 'block';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s = 2;
    }
    else if(s==2){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'block';
        s4.style.display = 'none';
        s = 3;
    }
    else if(s==3){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'block';
        s = 4;
    }
    else{
        s1.style.display = 'block';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s = 1;
    }
}

// 改变颜色
function color(){
    var s1 = document.getElementById('sweater1');
    var s2 = document.getElementById('sweater2');
    var s3 = document.getElementById('sweater3');
    var s4 = document.getElementById('sweater4');
    if(s==1){
        if(a==1){
            s1.style.backgroundImage = 'url(img/01__02.png)';
            a=2;
        }
        else if(a==2){
            s1.style.backgroundImage = 'url(img/01__03.png)';
            a=3;
        }
        else if(a==3){
            s1.style.backgroundImage = 'url(img/01__04.png)';
            a=4;
        }
        else{
            s1.style.backgroundImage = 'url(img/01__01.png)';
            a=1;
        }
    }
    else if(s==2){
        if(b==1){
            s2.style.backgroundImage = 'url(img/02__02.png)';
            b=2;
        }
        else if(b==2){
            s2.style.backgroundImage = 'url(img/02__03.png)';
            b=3;
        }
        else if(b==3){
            s2.style.backgroundImage = 'url(img/02__04.png)';
            b=4;
        }
        else{
            s2.style.backgroundImage = 'url(img/02__01.png)';
            b=1;
        }
    }
    else if(s==3){
        if(c==1){
            s3.style.backgroundImage = 'url(img/03__02.png)';
            c=2;
        }
        else if(c==2){
            s3.style.backgroundImage = 'url(img/03__03.png)';
            c=3;
        }
        else if(c==3){
            s3.style.backgroundImage = 'url(img/03__04.png)';
            c=4;
        }
        else{
            s3.style.backgroundImage = 'url(img/03__01.png)';
            c=1;
        }
    }
    else{
        if(d==1){
            s4.style.backgroundImage = 'url(img/04__02.png)';
            d=2;
        }
        else if(d==2){
            s4.style.backgroundImage = 'url(img/04__03.png)';
            d=3;
        }
        else if(d==3){
            s4.style.backgroundImage = 'url(img/04__04.png)';
            d=4;
        }
        else{
            s4.style.backgroundImage = 'url(img/04__01.png)';
            d=1;
        }
    }
}
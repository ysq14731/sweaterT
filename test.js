function showimg(){
		     $('#test').fadeIn(3000);	
			 $('#test2').fadeIn(4000);
			 $('#test3').fadeIn(5000);
			 document.getElementById("myBar").style.display="block";
		   }
		   
function move() {
		  var elem = document.getElementById("myBar");   
		  var width = 10;
		  var id = setInterval(frame, 40);
		  function frame() {
		    if (width >= 100) {
		      clearInterval(id);
		    } else {
		      width++; 
		      elem.style.width = width + '%'; 
		      elem.innerHTML = width * 1  + '%';
		    }
		  }
		}
		
function hide(){
			 $('#hid').fadeOut(5000);	 
		       }
function hideagain(){
	 document.getElementById("myBar").style.display="none";
}
// $().ready(function(){
// 	$('.tidao').click(function(){
// 		c(hide);
// 	})
// })
// 

function hide(){
			 $('#hid').fadeOut(5000);	 
		       }
			   
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
		
 function finsh(){
	 setTimeout(function(){
		 document.getElementById("wenzi").style.display="block";
	 },3700);
			 
			 
			 }		   

								  
// function c(showimg){
// 	
// 	showimg();
// 	move();
// 	finsh();
// }







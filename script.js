var para=document.getElementById("counter");

var text=para.innerText;
var num=Number(text);
function onFunction() {	 
   num++;
   document.getElementById("counter").innerText=num;
	
}
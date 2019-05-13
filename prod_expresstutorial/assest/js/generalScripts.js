
	var cambio = document.querySelector('.cambio').addEventListener('click', function(){

		var grid = document.getElementById("grid").classList.toggle("grid-line");
		var itemNew = document.querySelectorAll('.itemNew');
		for (var i = 0; i < itemNew.length; i++) {
			itemNew[i].classList.toggle("columsItemNew");
		}

		
	});
		

var right = document.querySelector('.right');
var menubar = document.querySelector('.menu-bar').addEventListener('click',function(){
	console.log("hola");
	right.classList.toggle('menu-active');
})
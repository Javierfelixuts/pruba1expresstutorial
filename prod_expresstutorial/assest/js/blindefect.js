window.onload = function(){
	var slideEfect = document.querySelectorAll('.slideEfect');
	var efect = document.querySelector('.efect');

	for (var i = 0;  i < slideEfect.length; i++) {
		slideEfect[i].style.height = '0%';
	}
	setTimeout(function(){
		efect.style.display = 'none';
	}, 1000);

//Efectos al header
	/*var colores = [
	[0,150,136,0.79],
	[78, 42, 53, 0.79],
	[150, 102, 0, 0.79],
	[0, 83, 150, 0.79]
	];
	console.log(colores.length);
	
	var contador = 1;
	var bg = document.querySelector(".content-banner");
	setInterval(()=>{
		if (contador >= colores.length) {
			contador = 0;
		}
		
		bg.style.backgroundColor = `rgba(${colores[contador]})`;
		contador++;
	},4000);*/
}

/*var itemsNews = document.querySelectorAll('.itemNew');
for (var i = 0; itemsNews.length; i++) {
	itemsNews[i].addEventListener('click', function(){
		alert('works!');
	});
}
}*/
/*function subir(){
	window.scrollTo(0,10);
}

window.onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (scroll >= 700) {
		arrowUP.style.opacity = '1';
	}else{
		arrowUP.style.opacity = '0';
	}
}*/
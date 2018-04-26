  var g;


  document.getElementById('m').addEventListener('click', function(){
  	g="m";
  });
document.getElementById('f').addEventListener('click', function(){
  	g="f";
  });

var dictionary_comida =[
		"Platano", "Fresa", "Piña", "Melocoton",
		 "Pera", "Berenjena", "Melon", "Limon",
		 "Dona", "Pastel", "Aguacate", "Zanahoria", "Cereza"
	];
var dictionary_animales =[
		"Gato", "Caballo", "Hormiga", "Dinosaurio",
		"Conejo", "Elefante", "Leon", "Tigre",
		"Aguila", "Pato", "Salmon", "Tiburon", 
		"Avispa", "Araña", "Jirafa", "Cebra", "Koala"
	];





(function() {
  var httpRequest;
//  document.querySelectorAll(".gender").addEventListener('click', makeRequest);
  document.getElementById('m').addEventListener('click', makeRequest);
  document.getElementById('f').addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = assign;
    httpRequest.open('GET', '/avatar');
    httpRequest.send();
  }



function assign(){

	var a = Math.floor((Math.random()*8)+1);

	if(g == "f"){
		console.log("hi girl");
	}
	 if(g == "m"){
		console.log("hi boy");
	}


	 if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        
        var n = (Math.floor(Math.random()*8)+1);
        var c = (Math.floor(Math.random()*12));
        var a = (Math.floor(Math.random()*16));


         var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*36000;
  now.setTime(expireTime);
  var tempExp = 'Wed, 31 Oct 2018 08:50:17 GMT';


     	document.cookie='gender='+g+';expires='+now.toGMTString()+';path=/';
      	document.cookie="nombre="+dictionary_comida[c]+dictionary_animales[a]+';expires='+now.toGMTString()+';path=/';
      	document.cookie="src="+'/images/avatars/'+g+'/'+n+'.png'+';expires='+now.toGMTString()+';path=/';

        console.log(n);

      	document.querySelector('div.content').innerHTML=httpRequest.responseText;

      	document.getElementById('gender-cookie').innerHTML+=g;
      	document.getElementById('random-img').setAttribute('src', '/images/avatars/'+g+'/'+n+'.png');


      	document.getElementById('nombre-cookie').innerHTML+=dictionary_comida[c]+dictionary_animales[a];


   

      } else {
        alert('There was a problem with the request.');
      }
    }
  }








})();








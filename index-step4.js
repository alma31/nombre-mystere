$(document).ready(main);

// Fonction principale
function main(){


    
	var question = prompt("choisir le nombre de tentatives");
	console.log(question);
	var tentatives = $("span").text(question);
	var min = parseInt(prompt("choisir les valeurs minimale"));
	var max = parseInt(prompt("choisir les valeurs maximale"));
    
    var nb = Math.round(Math.random() * (max-min+1))+min;
    console.log(nb);


$('.rei').click(function(){
      	location.reload();



      
       
    })

	

	 function clickValider(){

		

		var contenu = $('input').val();
		if (contenu == nb) {
			alert('Gagné');
			location.reload();

		} else if ( contenu > nb ) {
			question--;
			alert(' Perdu, votre nombre est trop grand')
			$("span").text(question);

		} else if ( contenu < nb ) {
			question--;
			alert('Perdu, votre nombre est trop petit')
			$("span").text(question);

		} 

		if (question == 0){
			alert("partie Perdue") 
			location.reload();
		}
        





		 
	}


    $('.ici').click(function(){
    	console.log('teste');
    	clickValider();
    })

}
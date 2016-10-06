$(document).ready(main);


function main(){

	var nb;
	var question;

	function reset(){

		question = prompt("choisir le nombre de tentatives");
		var min = parseInt(prompt("choisir les valeurs minimale"));
		var max = parseInt(prompt("choisir les valeurs maximale"));
		nb = Math.round(Math.random() * (max-min+1))+min;
		console.log(nb);
		$("span").text(question);

	}
	
	function clickValider(){
	

		var contenu = $('input').val();
		if (contenu == nb) {
			alert('Gagné');
			reset();

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
			reset();
		}

	}

	$('.ici').click(function(){
		clickValider();
	});

	$('.rei').click(function(){
		reset();
	});

	reset();

}
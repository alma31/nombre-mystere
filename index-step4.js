$(document).ready(main);

function tentative(message,viesRestantes) {
	viesRestantes--;
	console.log(message);
	$('span').text(viesRestantes);

	return viesRestantes;
}



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
	
	function finJeu(message){
		alert(message);
		reset();
	}
	

	
	function clickValider(){
	

		var contenu = parseInt($('input').val(), 10);
		
		if (contenu === nb) {
			finJeu('Gagné');
		} else if ( contenu > nb ) {
			question = tentative(' Perdu, votre nombre est trop grand', question);

		} else if ( contenu < nb ) {
			question = tentative('Perdu, votre nombre est trop petit', question);
		} 

		if (question == 0){
			finJeu("partie Perdue") 
		}

	}

	$('.ici').click(clickValider);

	$('.rei').click(reset);

	reset();

}

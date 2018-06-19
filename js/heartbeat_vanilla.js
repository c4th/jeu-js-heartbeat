/*
 * Notre application
 */

/*app = {
	init: function() {
		console.info("app.init")

		// Je récupère mon coeur
		var coeur = document.getElementById("coeur")
		console.log(coeur)

		// Je pose un événement
		coeur.addEventListener("click",app.monClic)
	},

	monClic: function() {
		console.info("app.monclic")
	}
}*/


app = {

	// Nombre de clics
	clickIt: 0,

	init: function() {
		console.info("app.init")

		// On pose un écouteur sur le clavier
		window.addEventListener("keypress", app.clavier)			
	},

	// Handler du clavier
	clavier: function(event) {
		console.info("app.clavier")
		if (event.keyCode == 13) {
		    app.lancerJeu()		    
		}
	},

	// On lance le jeu
	lancerJeu: function() {
		console.info("app.lancerJeu")

		var legende = document.getElementById("legende")
		legende.style.display = "none"
		
		var coeur = document.getElementById("coeur")
		coeur.addEventListener("click", app.clickBeat)	

		// On lance le compte à rebours
		setTimeout(app.endGame, 5000)
	},

	// On compte les clics
	clickBeat: function() {
		console.info("app.clickBeat")
		
		app.clickIt++ 
		var compteur = document.getElementById("compteur")
		compteur.innerHTML = app.clickIt
	},

	// On arrête le jeu
	endGame: function() {
		alert("Le temps est écoulé ! Voici votre score : " + app.clickIt)

		coeur.removeEventListener("click", app.clickBeat)
		legende.style.display = "block"

		var compteur = document.getElementById("compteur")
		compteur.innerHTML = ""

		app.clickIt = 0
	}
}


/*
 * Chargement du DOM
 */

document.addEventListener("DOMContentLoaded",function() {
	app.init()
})





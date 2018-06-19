/*
 * Notre application
 */

app = {

	// Nombre de clics
	clickIt: 0,

	init: function() {
		console.info("app.init")

		// On pose un écouteur sur le clavier
		$(document).on("keypress", app.clavier)			
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

		var legende = $("#legende")
		$("#legende").hide()
		
		var coeur = $("#coeur")
		coeur.on("click", app.clickBeat)	

		// On lance le compte à rebours
		setTimeout(app.endGame, 6000)
	},

	// On compte les clics
	clickBeat: function() {
		console.info("app.clickBeat")
		
		app.clickIt++ 
		var compteur = $("#compteur")
		compteur.html(app.clickIt)
	},

	// On arrête le jeu
	endGame: function() {
		alert("Le temps est écoulé ! Voici votre score : " + app.clickIt)

		var coeur = $("#coeur")
		coeur.off()
		$("#legende").show()

		var compteur = $("#compteur")
		compteur.html("")

		app.clickIt = 0
	}
}


/*
 * Chargement du DOM
 */

$(function() {
	app.init()
})





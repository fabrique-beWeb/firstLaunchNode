var express = require('express');
var appli = express();


appli.get(
	'/',
	function(request,response){
		response.send('salut a toi l\'arm�nien');
		
	}
);
appli.get(
	'/user',
	function(request,response){
		var retour = {
			nom : "derrieux",
			prenom : "loic"
		};
		response.json(retour);
		
	}
);

appli.listen(12107,function(){
	console.log("j'�coute rien du tout");
});
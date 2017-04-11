var express = require('express');
var appli = express();


appli.get(
	'/',
	function(request,response){
		response.sendFile( __dirname + '/views/index.html');		
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
	console.log("j'écoute rien du tout");
});
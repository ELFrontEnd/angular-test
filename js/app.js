(function(){

	// Déclaration de notre module global
	var app = angular.module('tfew', [ ]);

	// Déclaration d'un controller rattaché à notre module
	app.controller('ExperienceController', function(){
		this.item = gem;
	});

	var gem = {
		name: 'Point P 2013',
		time: '25 jours',
		description: ' développement et mise en prod PP2013',
	};
})();
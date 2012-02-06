THREE.ParticleCustomMaterial = function ( parameters ) {

	THREE.ParticleBasicMaterial.call( this, parameters );

	parameters = parameters || {};

	this.size = parameters.size !== undefined ? parameters.size : false;
	this.attributes = parameters.attributes !== undefined
		? parameters.attributes
		: { size: { type: 'f', value: [] } };

};

THREE.ParticleCustomMaterial.prototype = new THREE.ParticleBasicMaterial();
THREE.ParticleCustomMaterial.prototype.constructor = THREE.ParticleCustomMaterial;


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( );

renderer.setSize (window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

window.addEventListener('resize',function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize (width, height);
	camera.aspect = width/height;
	// camera.updateProjectionmatrix( );
});

// controll by mouse orbitcontrol
controls = THREE.OrbitControls(camera, renderer.domElement);

// // Create the sheap
var geometry = new THREE.BoxGeometry( 1, 1, 1);



// // Create a material colore or texture:
var cubeMaterials = 
[
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load("img/1.png"), side: THREE.DoubleSide} )

];

var cube = new THREE.Mesh( geometry, cubeMaterials );

scene.add( cube );

	camera.position.z = 2;





	// // Game loop
	var update = function ( ) {
		
		cube.rotation.x += 0.01; 
		cube.rotation.z += 0.01; 
	};

	// // draw scences
	var render = function ( ) {
		
		renderer.render( scene, camera );
	};

	var animation = function ( ) {
		
		requestAnimationFrame( animation );

		// update( );
		render();
	};

	animation( );
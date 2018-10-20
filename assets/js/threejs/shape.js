
    // standard global variables
        var container, scene, camera, renderer, controls, stats;

        //Scene
        var scene = new THREE.Scene();
        // camera 
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 20000 );

        scene.add(camera);
        camera.position.set(0,150,400);
        camera.lookAt(scene.position);
        //renderer 
        var renderer = new THREE.WebGLRenderer(  );
        renderer.setSize (window.innerWidth, window.innerHeight);

        // append "canves" to the body

        document.body.appendChild( renderer.domElement );

        // window resizer

        window.addEventListener('resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width/height;
            camera.updateProjectionmatrix();
        });

        // controll by mouse
        // controls = THREE.OrbitControls(camera, renderer.domElement);
        var controls = new THREE.OrbitControls( camera );
        // creat the shape
        // Using wireframe materials to illustrate shape details.
        var darkMaterial = new THREE.MeshBasicMaterial( { color: 0x87ceeb } );
        var wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: true } ); 
        

        var multiMaterial = [ darkMaterial, wireframeMaterial ]; 

        // icosahedron
        var shape = THREE.SceneUtils.createMultiMaterialObject( new THREE.IcosahedronGeometry( 12, 1 ),/*radius, subdivisions*/ multiMaterial );


        // un-comment when meterial image will be finish
        // var cube = new THREE.Mesh( geometry, cubeMaterials );
        // shape.position.set(0, 50, 0);
        scene.add( shape );
        camera.position.set( 0, 20, 50 );
        controls.update();
        // camera.position.x = 0;
        // camera.position.y = 20;
        // camera.position.z = 50;

        // update function
        var update = function ( ) {
            
            shape.rotation.x += 0.01; 
            shape.rotation.y += 0.01; 
            shape.rotation.z += 0.01; 
        };

        // // draw scences
        var render = function ( ) {
            
            renderer.render( scene, camera );
        };

        var animation = function ( ) {
            
            requestAnimationFrame( animation );

            update( );
            render();
        };

        animation( );
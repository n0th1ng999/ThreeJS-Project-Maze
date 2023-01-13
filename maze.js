import * as THREE from './three.module.js';
import { FirstPersonControls } from './FirstPersonControls.js';
import { OrbitControls } from './OrbitControls.js';
let controls
const clock = new THREE.Clock();

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.z = 10;
camera.position.x = 3;
camera.position.y = 2;


const Cameralight = new THREE.PointLight( 0xffffff, 3 , 13 );
Cameralight.position.set(0,0,0)
Cameralight.castshadow = true;

camera.add(Cameralight)

scene.add( camera );


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Arm First Person
let geometry = new THREE.BoxGeometry( 0.5, 1, 5 );
let material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce , opacity:0} );
const arm = new THREE.Mesh( geometry, material );
arm.castShadow = true;
arm.receiveShadow  = true;
arm.position.set(3.5,-1.5,-4);

//Palm
geometry = new THREE.BoxGeometry( 0.5, 1.2, 1.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const palm = new THREE.Mesh( geometry, material );
palm.position.set(-0.1,0,-3);
arm.add(palm)

geometry = new THREE.BoxGeometry( 0.2, 1, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger1 = new THREE.Mesh( geometry, material );
palm.add(finger1);
finger1.position.set(0,1,0)



geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger2 = new THREE.Mesh( geometry, material );
palm.add(finger2);
finger2.position.set(-1,0.5,0)
finger2.rotation.y = 2.7

geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger3 = new THREE.Mesh( geometry, material );
palm.add(finger3);
finger3.position.set(-1,0.1,0)
finger3.rotation.y = 2.7

geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger4 = new THREE.Mesh( geometry, material );
palm.add(finger4);
finger4.position.set(-1,-0.3,0)
finger4.rotation.y = 2.7

camera.add( arm );


//Parede 1 
geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.MeshLambertMaterial( { color: 0xf00ff0 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
cube.receiveShadow  = true;
scene.add( cube );

renderer.setClearColor("#9BD4C3");
geometry = new THREE.PlaneGeometry( 1000,1000 );
material = new THREE.MeshLambertMaterial( {color: 0xFEFEFE, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
plane.receiveShadow = true
plane.rotation.x =   Math.PI / 2

plane.position.y=-1
plane.position.z=-0 
plane.position.x=-0 
scene.add( plane );





const Ambientlight = new THREE.AmbientLight( 0x040404 , 6)
scene.add ( Ambientlight );
 
const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 30, 20, 50 );
light.castshadow = true;


scene.add( light )


controls = new FirstPersonControls(camera,renderer.domElement)



function initRender() {
    renderer.render( scene, camera );
};


function PickupTrash(){
    console.log('Pickup')
    
    
  
    RotateArm()
    
 

    renderer.render( scene, camera );

}

let direction = 1   

function RotateArm(){
        
        for (let i = 0; i <= 50; i++){

            requestAnimationFrame(Rotate1)
            
        }
        
        for (let i = 0; i <= 50; i++){

            requestAnimationFrame(Rotate2)
            
        }
        
}

function Rotate1(){
    arm.rotation.y += 0.01 
    arm.rotation.x -= 0.01 
    
}

function Rotate2(){
    arm.rotation.y -= 0.01 
    arm.rotation.x += 0.01 
    
}


function animate(){
    
    render();
    requestAnimationFrame( animate );
   
}

function render(){
    
    controls.update( clock.getDelta() );
    renderer.render( scene, camera );
}


document.addEventListener("click", () => {
    PickupTrash()
})

animate();

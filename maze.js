import * as THREE from './three.module.js';

//Scene Setup + Camera
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 10;
scene.add( camera );

//Campera Light
const Cameralight = new THREE.PointLight( 0xffffff, 3 , 15 );
Cameralight.position.set(0,0,0)
Cameralight.castshadow = true;
camera.add(Cameralight)

//Shadows 
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


//Fingers
geometry = new THREE.BoxGeometry( 0.2, 1, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger1 = new THREE.Mesh( geometry, material );
palm.add(finger1);
finger1.position.set(0,1,0)

geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger2 = new THREE.Mesh( geometry, material );
palm.add(finger2);
finger2.position.set(-0.8,0.5,-0.5)
finger2.rotation.y = 2.7

geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger3 = new THREE.Mesh( geometry, material );
palm.add(finger3);
finger3.position.set(-0.8,0.1,-0.5)
finger3.rotation.y = 2.7

geometry = new THREE.BoxGeometry( 1, 0.2, 0.2 );
material = new THREE.MeshLambertMaterial( { color: 0xf7e7ce } );
const finger4 = new THREE.Mesh( geometry, material );
palm.add(finger4);
finger4.position.set(-0.8,-0.3,-0.5)
finger4.rotation.y = 2.7

camera.add( arm );


//Trash 1 ( Coke Can )
const CokeCanTexture = new THREE.TextureLoader().load( 'textures/CokeCan.jpg' );
CokeCanTexture.wrapS = THREE.ClampToEdgeWrapping;
CokeCanTexture.wrapT = THREE.ClampToEdgeWrapping;

// Create the Geometry
geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 32 );

// Create the Trash1 material with the previously defined texture
material = new THREE.MeshLambertMaterial({ map: CokeCanTexture });

// Create the Trash1 mesh
const Trash1 = new THREE.Mesh( geometry, material );
Trash1.castShadow = true;
Trash1.receiveShadow  = true;

// Add the Trash1 to the scene
scene.add( Trash1 );

geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.1, 32 );
material = new THREE.MeshLambertMaterial({ color: "#444"})
const cap = new THREE.Mesh( geometry, material );
cap.position.set(0,0.8,0)
Trash1.add( cap );

//MAZE
// Create the maze walls
const wallGeometry = new THREE.BoxGeometry(10, 5, 0.5);
const wallMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });

// Create the walls of the maze
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
wall1.position.set(0, 1.5, -9);

const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
wall2.position.set(5, 1.5, 6);
wall2.rotation.y = Math.PI / 2;

const wall3 = new THREE.Mesh(wallGeometry, wallMaterial);
wall3.position.set(-5, 1.5, 6);
wall3.rotation.y = Math.PI / 2;

const wall4 = new THREE.Mesh(wallGeometry, wallMaterial);
wall4.position.set(0, 1.5, 11);

const wall5 = new THREE.Mesh(wallGeometry, wallMaterial);
wall5.position.set(10, 1.5, 1);

const wall6 = new THREE.Mesh(wallGeometry, wallMaterial);
wall6.position.set(10, 1.5, -9);

const wall7 = new THREE.Mesh(wallGeometry, wallMaterial);
wall7.position.set(-10, 1.5, -9);

const wall8 = new THREE.Mesh(wallGeometry, wallMaterial);
wall8.position.set(-10, 1.5, 1);

const wall9 = new THREE.Mesh(wallGeometry, wallMaterial);
wall9.position.set(-15, 1.5, 6);
wall9.rotation.y = Math.PI / 2;

const wall10 = new THREE.Mesh(wallGeometry, wallMaterial);
wall10.position.set(-15, 1.5, -14);
wall10.rotation.y = Math.PI / 2;

const wall11 = new THREE.Mesh(wallGeometry, wallMaterial);
wall11.position.set(15, 1.5, 6);
wall11.rotation.y = Math.PI / 2;

const wall12 = new THREE.Mesh(wallGeometry, wallMaterial);
wall12.position.set(15, 1.5, -14);
wall12.rotation.y = Math.PI / 2;


const wall14 = new THREE.Mesh(wallGeometry, wallMaterial);
wall14.position.set(25, 1.5, -14);
wall14.rotation.y = Math.PI / 2;

const wall16 = new THREE.Mesh(wallGeometry, wallMaterial);
wall16.position.set(25, 1.5, -4);
wall16.rotation.y = Math.PI / 2;

const wall18 = new THREE.Mesh(wallGeometry, wallMaterial);
wall18.position.set(25, 1.5, 6);
wall18.rotation.y = Math.PI / 2;

const wall13 = new THREE.Mesh(wallGeometry, wallMaterial);
wall13.position.set(-25, 1.5, -14);
wall13.rotation.y = Math.PI / 2;

const wall15 = new THREE.Mesh(wallGeometry, wallMaterial);
wall15.position.set(-25, 1.5, -4);
wall15.rotation.y = Math.PI / 2;

const wall17 = new THREE.Mesh(wallGeometry, wallMaterial);
wall17.position.set(-25, 1.5, 6);
wall17.rotation.y = Math.PI / 2;


const wall19 = new THREE.Mesh(wallGeometry, wallMaterial);
wall19.position.set(-25, 1.5, 6);
wall19.rotation.y = Math.PI / 2;

const wall20 = new THREE.Mesh(wallGeometry, wallMaterial);
wall20.position.set(-10, 1.5, 19)


const wall21 = new THREE.Mesh(wallGeometry, wallMaterial);
wall21.position.set(-5, 1.5, 14)
wall21.rotation.y = Math.PI / 2;

const wall22 = new THREE.Mesh(wallGeometry, wallMaterial);
wall22.position.set(5, 1.5, 14);
wall22.rotation.y = Math.PI / 2;

const wall23 = new THREE.Mesh(wallGeometry, wallMaterial);
wall23.position.set(-20, 1.5, 19)

const wall24 = new THREE.Mesh(wallGeometry, wallMaterial);
wall24.position.set(-25, 1.5, 14)
wall24.rotation.y = Math.PI / 2;

const wall25 = new THREE.Mesh(wallGeometry, wallMaterial);
wall25.position.set(20, 1.5, 19)

const wall26 = new THREE.Mesh(wallGeometry, wallMaterial);
wall26.position.set(25, 1.5, 14)
wall26.rotation.y = Math.PI / 2;

const wall27 = new THREE.Mesh(wallGeometry, wallMaterial);
wall27.position.set(10, 1.5, 19)

const wall28 = new THREE.Mesh(wallGeometry, wallMaterial);
wall28.position.set(20, 1.5, -19)

const wall29 = new THREE.Mesh(wallGeometry, wallMaterial);
wall29.position.set(-20, 1.5, -19)


//Store Walls in Array
let ArrayWalls = [
  wall1, wall2, wall3,
   wall4, wall5, wall6,
    wall7, wall8, wall9,
     wall10, wall11, wall12,
      wall13, wall14, wall15,
       wall16, wall17, wall18, 
       wall19, wall20, wall21,
       wall22, wall23, wall24,
       wall25,wall26,wall27,wall28,wall29]


// Add the walls to the scene
ArrayWalls.forEach( Wall => {
  scene.add(Wall)
})



renderer.setClearColor("#9BD4C3");
geometry = new THREE.PlaneGeometry( 1000,1000 );
material = new THREE.MeshLambertMaterial( {color: 0xFEFEFE, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
plane.receiveShadow = true
plane.rotation.x =   Math.PI / 2

plane.position.y= -1
plane.position.z= -0 
plane.position.x= -0 
scene.add( plane );





const Ambientlight = new THREE.AmbientLight( 0x040404 , 6)
scene.add ( Ambientlight );
 
const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 30, 20, 50 );
light.castshadow = true;


scene.add( light )



function initRender() {
    renderer.render( scene, camera );
};

let clockwise = true;
let start = Date.now();
let animationComplete = false;
let animationStarted = false;

function Rotate() {
    
   
  if (!animationComplete) {
    let elapsed = Date.now() - start;
  
    if (elapsed > 1000) {
      clockwise = !clockwise;
      start = Date.now();
    }

  
    if (clockwise) {
      arm.rotation.x -= 0.005;
      arm.rotation.y += 0.005;
    } else {
      arm.rotation.x += 0.005;
      arm.rotation.y -= 0.005;
    }
  

    renderer.render(scene, camera);
    requestAnimationFrame(Rotate);
  } 
}


let objectInHandState = false
let objectInHand = Trash1


function checkObjectDistance(object) {
  // Distance threshold
  const distanceThreshold = 10;
  let distance = camera.position.distanceTo(object.position);
  if (distance < distanceThreshold) {
      return true;
  } else {
      return false;
  }
}

document.addEventListener("keydown", (event) => {
   
    if(event.keyCode == "32 "){
      if (!animationStarted) {
          animationComplete = false;
          animationStarted = true;
          start = Date.now();
          
  
          setTimeout(() => {
              animationComplete = true;
              animationStarted = false;
              clockwise = true;
          }, 2000);
          Rotate();

          // Pickup the object from the ground 

          

          if(!objectInHandState){
            setTimeout( ()=> {
            
            if(checkObjectDistance(Trash1)){
              palm.add(Trash1)
              Trash1.position.x = -0.8
              objectInHandState = true
              finger1.rotation.z = 1.5
              finger1.position.y = 0.7  
            }
            

          },1000)
          }


          // Put the object in the trash
          if(objectInHandState){
            setTimeout( ()=> {

              if(objectInHand == Trash1){
                scene.add(Trash1)
                Trash1.position.x = 0
                objectInHandState = false
                finger1.position.set(0,1,0)
                finger1.rotation.set(0,0,0)
              }
          },1000)
          }
          }

    }
})

// Player movement

// Camera rotation speed 90 degrees
const rotationSpeed = (Math.PI/2); // 90 degrees

// Camera movement speed
const speed = 0.5;

document.addEventListener("keydown", (event) => {

  // Get the camera's current rotation
  let cameraRotation = camera.rotation.y;
  // Check if the key pressed is "W"
  if (event.key === "w") {
      // Move the camera forward in the direction it is facing
      camera.position.x -= speed * Math.sin(cameraRotation);
      camera.position.z -= speed * Math.cos(cameraRotation);
  }
  // Check if the key pressed is "S"
  else if (event.key === "s") {
      // Move the camera backward in the direction it is facing
      camera.position.x += speed * Math.sin(cameraRotation);
      camera.position.z += speed * Math.cos(cameraRotation);
  }
  // Check if the key pressed is "A"
  else if (event.key === "a") {
      // Rotate the camera anti-clockwise on the Y axis
      camera.rotation.y += rotationSpeed;
  }
  // Check if the key pressed is "D"
  else if (event.key === "d") {
      // Rotate the camera clockwise on the Y axis
      camera.rotation.y -= rotationSpeed;
  }
}, false);



//Render Functions

function animate(){
    
    render();
    requestAnimationFrame( animate );
    
}


function checkWallCollision(camera, walls) {
  walls.forEach(wall => {
      const cameraPos = camera.position.clone();
      const wallPos = wall.position.clone();
      const distance = cameraPos.distanceTo(wallPos);
      if (distance < 0.5) {
          camera.position.copy(cameraPos);
      }
  });
}

function render(){

    renderer.render( scene, camera );
}

//START RENDERING
animate();


console.log(camera.position)
import * as THREE from './three.module.js';
import { FirstPersonControls } from './FirstPersonControls.js';
import { OrbitControls } from './OrbitControls.js';

let renderer = null,
scene = null,
camera = null,
light = null,
pointLightHelper = null;

window.onload = function init() {
    let camera, scene, renderer;
    let sphere1, sphere2, sphere3;

    // once everything is loaded, we run our Three.js stuff
    window.onload = function init() {
        /*********************
         * SCENE 
         * *******************/
        // create an empty scene, that will hold all our elements such as objects, cameras and lights
        scene = new THREE.Scene();


        /*********************
         * CAMERA 
         * *******************/
        // create a camera, which defines where we're looking at
        const aspect = window.innerWidth / window.innerHeight;
        camera = new THREE.PerspectiveCamera(45, aspect, 5, 50);
        camera.position.set(0, 5, 10);
        camera.lookAt(new THREE.Vector3(0, 1, 0)); // point camera


        /*********************
         * RENDERER 
         * *******************/
        // create a render and set the size
        renderer = new THREE.WebGLRenderer({ antialias: false }); // aliasing (jagged edges when rendering)
        renderer.setSize(window.innerWidth, window.innerHeight);
        // configure renderer clear color
        renderer.setClearColor(0x8a8a8a);

        // add the output of the renderer to an HTML element (this case, the body)
        document.body.appendChild(renderer.domElement);


        /*********************
        * ORBIT CONTROLS 
        *********************/
        const controls = new OrbitControls( camera, renderer.domElement );
 

        /*****************************
         * ADD 1 PLANE and 3 SPHERES 
         * ***************************/
        let geometry = new THREE.PlaneGeometry(20, 20);
        let material = new THREE.MeshBasicMaterial({ color: 0x4b4b4b, wireframe: false });
        let plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = - Math.PI / 2;
        plane.name = "plane";
        scene.add(plane);

        //sphere 1 (low poly)
        geometry = new THREE.SphereGeometry(1, 4, 4);
        material = new THREE.MeshBasicMaterial({ color: "green" });
        sphere1 = new THREE.Mesh(geometry, material);
        sphere1.position.set(-3, 1, 1);
        scene.add(sphere1);

        //sphere 2
        geometry = new THREE.SphereGeometry(1, 10, 10);
        material = new THREE.MeshBasicMaterial({ color: "blue" });
        sphere2 = new THREE.Mesh(geometry, material);
        sphere2.position.set(0, 1, 0);
        scene.add(sphere2);

        //sphere 3
        geometry = new THREE.SphereGeometry(1, 100, 100);
        material = new THREE.MeshBasicMaterial({ color: "red" });
        sphere3 = new THREE.Mesh(geometry, material);
        sphere3.position.set(3, 1, -1);
        scene.add(sphere3);


        /*********************
        * LIGHTS 
        *********************/
        let light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);

        let light2 = new THREE.PointLight(0xffffff, 1);
        light2.position.set(0, 4, 2);
        scene.add(light2);
        // light helper
        let pointLightHelper = new THREE.PointLightHelper(light2, 0.4);
        pointLightHelper.name = "helper";
        scene.add(pointLightHelper);


        /*****************************
         * ANIMATE 
         * ***************************/
        // set the animation function
        renderer.setAnimationLoop(render);


        /*********************
        * KEY HANDLING 
        *********************/
        document.onkeydown = handleKeyDown;
    }


    function render() {
        sphere1.rotation.y += 0.01;
        sphere2.rotation.y += 0.01;
        sphere3.rotation.y += 0.01;

        // render the scene into viewport using the camera
        renderer.render(scene, camera);
    }

    function handleKeyDown(e) {
        let char = e.key;

        /*****************************
        * CHANGE MATERIAL 
        ****************************/
        // BASIC
        if (char == "b") {
            sphere1.material = new THREE.MeshBasicMaterial({ color: "red" });
            sphere2.material = new THREE.MeshBasicMaterial({ color: "green" });
            sphere3.material = new THREE.MeshBasicMaterial({ color: "blue" });
        }
        // NORMAL
        else if (char == "n") {
            //Go through all children of the scene object 
            scene.traverse(function (child) {
                // and search for Meshes with no name (light helper and plane have names)
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshNormalMaterial();
                }
            });
        }
        else if (char == "l") {
            scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshLambertMaterial( {
                            color: 0x2194ce
                    });
                }
            });
        }
        else if (char == "p") {
            scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshPhongMaterial({
                            color: 0x2194ce, shininess: 100
                        });
                }
            });
        }
        else if (char == "f") {
            scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshPhongMaterial({
                            color: 0x2194ce, shininess: 100
                            , flatShading: true
                    });
                }
            });
        }
        else if (char == "s") {
            scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshStandardMaterial({
                            color: 0x2194ce
                    });
                }
            });
        }
        else if (char == "d") {
            scene.traverse(function (child) {
                if (child instanceof THREE.Mesh && child.name == "") {
                    child.material = new THREE.MeshDepthMaterial();
                }
            });
        }
    }
}

document.addEventListener('keydown', (e)=>{
    if(e.key=='a'){

    }

    if(e.key=='d'){
       
    }

    if(e.key=='w'){
        
    }

    if(e.key=='s'){
        
    }
})
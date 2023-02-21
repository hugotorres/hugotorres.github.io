 // Create scene, camera, and renderer
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
 );
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Create cube and add to scene
 const geometry = new THREE.BoxGeometry(1, 1, 1);
 const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
 const cube = new THREE.Mesh(geometry, material);
 scene.add(cube);

 // Set cube initial position and velocity
 cube.position.set(0, 0, 0);
 const cubeVelocity = new THREE.Vector3(0.05, 0.1, 0.05);

 // Create social media banner
 const bannerGeometry = new THREE.PlaneGeometry(5, 0.5);
 const bannerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
 const banner = new THREE.Mesh(bannerGeometry, bannerMaterial);
 banner.position.set(0, -window.innerHeight / 2 + 0.25, 0);
 scene.add(banner);

 // Render loop function
 function animate() {
   requestAnimationFrame(animate);

   // Move cube based on velocity
   cube.position.add(cubeVelocity);

   // Check for cube collision with screen border
   if (
     cube.position.x + 1 > window.innerWidth / 2 ||
     cube.position.x - 1 < -window.innerWidth / 2
   ) {
     cubeVelocity.x *= -1;
   }
   if (
     cube.position.y + 1 > window.innerHeight / 2 ||
     cube.position.y - 1 < -window.innerHeight / 2
   ) {
     cubeVelocity.y *= -1;
   }
   if (cube.position.z + 1 > 10 || cube.position.z - 1 < -10) {
     cubeVelocity.z *= -1;
   }

   // Render the scene
   renderer.render(scene, camera);
 }

 // Run the animation loop
 animate();
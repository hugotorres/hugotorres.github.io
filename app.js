// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set initial cube velocity
let cubeVelocity = new THREE.Vector3(0.05, 0.05, 0);

// Position camera
camera.position.z = 5;

// Banner
const bannerGeometry = new THREE.PlaneGeometry(window.innerWidth, 100);
const bannerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const banner = new THREE.Mesh(bannerGeometry, bannerMaterial);
banner.position.y = -window.innerHeight / 2 + 50;
scene.add(banner);

// Social media icons
const facebookGeometry = new THREE.PlaneGeometry(50, 50);
const facebookMaterial = new THREE.MeshBasicMaterial({
  color: 0x3b5998,
  map: new THREE.TextureLoader().load('https://i.imgur.com/78dgy5A.png')
});
const facebookIcon = new THREE.Mesh(facebookGeometry, facebookMaterial);
facebookIcon.position.x = -window.innerWidth / 2 + 50;
facebookIcon.position.y = -window.innerHeight / 2 + 25;
banner.add(facebookIcon);

const twitterGeometry = new THREE.PlaneGeometry(50, 50);
const twitterMaterial = new THREE.MeshBasicMaterial({
  color: 0x1da1f2,
  map: new THREE.TextureLoader().load('https://i.imgur.com/gWqpX5p.png')
});
const twitterIcon = new THREE.Mesh(twitterGeometry, twitterMaterial);
twitterIcon.position.x = -window.innerWidth / 2 + 150;
twitterIcon.position.y = -window.innerHeight / 2 + 25;
banner.add(twitterIcon);

const instagramGeometry = new THREE.PlaneGeometry(50, 50);
const instagramMaterial = new THREE.MeshBasicMaterial({
  color: 0xffc107,
  map: new THREE.TextureLoader().load('https://i.imgur.com/fTtLx0S.png')
});
const instagramIcon = new THREE.Mesh(instagramGeometry, instagramMaterial);
instagramIcon.position.x = -window.innerWidth / 2 + 250;
instagramIcon.position.y = -window.innerHeight / 2 + 25;
banner.add(instagramIcon);

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Move cube
  cube.position.add(cubeVelocity);

  // Check if cube is hitting the screen border
  if (cube.position.x + 1 > window.innerWidth / 2 || cube.position.x - 1 < -window.innerWidth / 2) {
    cubeVelocity.x *= -1;
  }

  if (cube.position.y + 1 > window.innerHeight / 2 || cube.position.y - 1 < -window.innerHeight / 2) {
    cubeVelocity.y *= -1;
  }

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Reverse cube velocity on click
function onCubeClick() {
  cubeVelocity.multiplyScalar(-1);
}

// Add click listener to cube


cube.addEventListener('click', onCubeClick);

animate();
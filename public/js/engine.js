// create a WebGLRenderer and set its width and height
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// add the automatically created canvas element to the page
document.body.appendChild(renderer.domElement);

// create a Scene
var scene = new THREE.Scene();

// create a PerspectiveCamera
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var nearClippingPlane = 0.1;
var farClippingPlane = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
camera.position.set(0, 0, 20);

// create a TorusKnotBufferGeometry
var geometry = new THREE.TorusKnotBufferGeometry(5, 1, 100, 16);

// create a MeshStandardMaterial and set its color to purple
var material = new THREE.MeshStandardMaterial({
    color: 0xb300b3,
});

// create a Mesh containing the geometry and material and add it to the scene
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// create a dark grey ambient light with an intensity of 1.0 and add it to the scene
var ambientLight = new THREE.AmbientLight(0x666666, 1.0);
scene.add(ambientLight);

// Create a white directional light with an intensity of 1.0
var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

function animate() {
    // schedule the animate function to be called at the start of every frame
    requestAnimationFrame(animate);

    // increase the mesh's rotation each frame
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    // render a frame
    renderer.render(scene, camera);
}
animate();
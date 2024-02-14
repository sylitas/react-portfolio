import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef } from 'react';
import earthCoordinate from './coordinate.json';

const generateEarth = async (canvasRef) => {
  /**
   *
   * @param {*} coords
   * @param {*} radius
   * @returns
   */
  const createLineFromCoords = (coords, radius) => {
    let lineGeom = new THREE.BufferGeometry();
    let positions = [];
    for (var i = 0; i < coords.length; i++) {
      let lat = coords[i].y;
      let lon = coords[i].x;
      let latRad = lat * (Math.PI / 180);
      let lonRad = -lon * (Math.PI / 180);
      let x = Math.cos(latRad) * Math.cos(lonRad) * radius;
      let y = Math.sin(latRad) * radius;
      let z = Math.cos(latRad) * Math.sin(lonRad) * radius;
      positions.push(x, y, z);
    }
    lineGeom.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      linewidth: 0.5,
      color: 'white',
    });
    return new THREE.Line(lineGeom, lineMaterial);
  };

  /**
   *
   * @param {*} features
   * @param {*} radius
   * @returns
   */
  const addGeoJsonFeaturesToScene = (features, radius) => {
    const lines = new THREE.Group();
    for (let i = 0; i < features.length; i++) {
      let feature = features[i];
      let coords = [];
      for (let c = 0; c < feature.geometry.coordinates.length; c++) {
        if (feature.geometry.type === 'Polygon') {
          let coords = [];
          for (let s = 0; s < feature.geometry.coordinates[c].length; s++) {
            let xy = {
              x: feature.geometry.coordinates[c][s][0],
              y: feature.geometry.coordinates[c][s][1],
            };
            coords.push(xy);
          }
          if (coords.length > 0) {
            lines.add(createLineFromCoords(coords, radius));
          }
        } else if (feature.geometry.type === 'MultiPolygon') {
          for (let s = 0; s < feature.geometry.coordinates[c].length; s++) {
            let coords = [];
            for (
              let m = 0;
              m < feature.geometry.coordinates[c][s].length;
              m++
            ) {
              let xy = {
                x: feature.geometry.coordinates[c][s][m][0],
                y: feature.geometry.coordinates[c][s][m][1],
              };
              coords.push(xy);
            }
          }
          if (coords.length > 0) {
            lines.add(createLineFromCoords(coords, radius));
          }
        } else if (feature.geometry.type === 'LineString') {
          let xy = {
            x: feature.geometry.coordinates[c][0],
            y: feature.geometry.coordinates[c][1],
          };
          coords.push(xy);
        }
      }
      if ((feature.geometry.type = 'LineString')) {
        if (coords.length > 0) {
          lines.add(createLineFromCoords(coords, radius));
        }
      }
    }
    return lines;
  };
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  if (window.innerWidth < 991.98) {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 500;
  } else {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 300;
  }
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.current,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('.threeJS').appendChild(renderer.domElement);
  const r = 100;
  const data = earthCoordinate;
  const linesGroup = addGeoJsonFeaturesToScene(data.features, r);
  scene.add(linesGroup);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  // Responsive
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 991.98) {
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 600;
    } else {
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 300;
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);
  });

  const render = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  };

  render();
};

export default function Three() {
  const canvasRef = useRef();

  useEffect(() => {
    generateEarth(canvasRef);
  }, []);

  return <canvas ref={canvasRef} />;
}

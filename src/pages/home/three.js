import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef } from 'react';
import earthCoordinate from './coordinate.json';

const createLineFromCoords = (coords, radius) => {
  const lineGeom = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < coords.length; i++) {
    const lat = coords[i].y;
    const lon = coords[i].x;
    const latRad = lat * (Math.PI / 180);
    const lonRad = -lon * (Math.PI / 180);
    const x = Math.cos(latRad) * Math.cos(lonRad) * radius;
    const y = Math.sin(latRad) * radius;
    const z = Math.cos(latRad) * Math.sin(lonRad) * radius;
    positions.push(x, y, z);
  }

  lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    linewidth: 0.5,
    color: 'white',
  });

  return new THREE.Line(lineGeom, lineMaterial);
};

const addGeoJsonFeaturesToScene = (features, radius) => {
  const lines = new THREE.Group();

  for (let i = 0; i < features.length; i++) {
    const feature = features[i];
    const { geometry } = feature;

    if (geometry.type === 'Polygon') {
      for (let c = 0; c < geometry.coordinates.length; c++) {
        const coords = [];

        for (let s = 0; s < geometry.coordinates[c].length; s++) {
          coords.push({
            x: geometry.coordinates[c][s][0],
            y: geometry.coordinates[c][s][1],
          });
        }

        if (coords.length > 0) {
          lines.add(createLineFromCoords(coords, radius));
        }
      }
    } else if (geometry.type === 'MultiPolygon') {
      for (let c = 0; c < geometry.coordinates.length; c++) {
        for (let s = 0; s < geometry.coordinates[c].length; s++) {
          const coords = [];

          for (let m = 0; m < geometry.coordinates[c][s].length; m++) {
            coords.push({
              x: geometry.coordinates[c][s][m][0],
              y: geometry.coordinates[c][s][m][1],
            });
          }

          if (coords.length > 0) {
            lines.add(createLineFromCoords(coords, radius));
          }
        }
      }
    } else if (geometry.type === 'LineString') {
      const coords = [];

      for (let c = 0; c < geometry.coordinates.length; c++) {
        coords.push({
          x: geometry.coordinates[c][0],
          y: geometry.coordinates[c][1],
        });
      }

      if (coords.length > 0) {
        lines.add(createLineFromCoords(coords, radius));
      }
    }
  }

  return lines;
};

const setCameraPosition = (camera, width) => {
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = width < 991.98 ? 600 : 300;
};

export default function Three() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    setCameraPosition(camera, window.innerWidth);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const linesGroup = addGeoJsonFeaturesToScene(earthCoordinate.features, 100);
    scene.add(linesGroup);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = true;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setCameraPosition(camera, width);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
    };

    let frameId;
    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      controls.dispose();

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      scene.remove(linesGroup);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

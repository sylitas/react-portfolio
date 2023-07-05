import * as d3 from 'd3';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef } from 'react';

export default function Three() {
  const canvasRef = useRef();

  useEffect(() => {
    const pointFragmentShader = `
  precision highp float;
  varying vec4 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = distance(uv, vec2(0.5, 0.5));
    if (d > 0.5) discard;
    else gl_FragColor = vec4( vColor.rgb, 1.0 );
    // float color = 1.0 - step(0.5, d);
    // gl_FragColor = vColor * color;
  }
 `;
    const pointVertexShader = `
  precision highp float;
  attribute float size;
  varying vec4 vColor;

  void main() {
    vColor = color;
    gl_PointSize = size * 200.0 / -(modelViewMatrix * vec4( position, 1.0 )).z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 300;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.threeJS').appendChild(renderer.domElement);
    const r = 100;
    d3.json(
      'https://gisco-services.ec.europa.eu/distribution/v2/countries/geojson/CNTR_BN_20M_2020_4326.geojson'
    ).then((data) => {
      const linesGroup = addGeoJsonFeaturesToScene(data.features, r);
      scene.add(linesGroup);
    });
    setPoint();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;

    render();
    function render() {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    async function setPoint() {
      const d1 = await d3.csv(
        'https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2020-06-01%2000:00:00&endtime=2021-01-01%2000:00:00&minmagnitude=4&orderby=time'
      );
      const d2 = await d3.csv(
        'https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2020-01-01%2000:00:00&endtime=2020-06-01%2000:00:00&minmagnitude=4&orderby=time'
      );
      const quakesData = d2.concat(d1);
      const vertices = [];
      const colors = [];
      const sizes = [];
      quakesData
        .sort((a, b) => a.mag - b.mag)
        .forEach((item) => {
          const position = lglt2xyz(item.longitude, item.latitude, r * 1.01);
          if (!(isNaN(position.x) && isNaN(position.x) && isNaN(position.x))) {
            vertices.push(position.x, position.y, position.z);
            const mag = (item.mag - 4) / 2;
            const color = d3.interpolateYlOrBr(mag).slice(4, -1).split(',');
            colors.push(color[0] / 255, color[1] / 255, color[2] / 255, 0.8);
            sizes.push(mag * 3 + 2);
          }
        });
      const geometry = new THREE.BufferGeometry();
      const verticesBuffer = new Float32Array(vertices);
      const colorsBuffer = new Float32Array(colors);
      const sizesBuffer = new Float32Array(sizes);
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(verticesBuffer, 3)
      );
      geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colorsBuffer, 4)
      );
      geometry.setAttribute('size', new THREE.BufferAttribute(sizesBuffer, 1));
      const material = new THREE.ShaderMaterial({
        fragmentShader: pointFragmentShader,
        vertexShader: pointVertexShader,
        vertexColors: true,
        transparent: true,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
    }

    function lglt2xyz(lng, lat, radius) {
      const theta = (90 + lng) * (Math.PI / 180) + Math.PI / 2;
      const phi = (90 - lat) * (Math.PI / 180);
      return new THREE.Vector3().setFromSpherical(
        new THREE.Spherical(radius, phi, theta)
      );
    }

    function addGeoJsonFeaturesToScene(features, radius) {
      const lines = new THREE.Group();
      for (let i = 0; i < features.length; i++) {
        let feature = features[i];
        let coords = [];
        for (let c = 0; c < feature.geometry.coordinates.length; c++) {
          if (feature.geometry.type == 'Polygon') {
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
          } else if (feature.geometry.type == 'MultiPolygon') {
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
          } else if (feature.geometry.type == 'LineString') {
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
    }

    function createLineFromCoords(coords, radius) {
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
        linewidth: 1,
        color: 'white',
      });
      return new THREE.Line(lineGeom, lineMaterial);
    }
  }, []);

  return <canvas ref={canvasRef} />;
}


import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Hero3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;
    
    // Initialize Three.js
    const init = () => {
      try {
        if (!canvasRef.current || !containerRef.current) return;
        
        // Setup
        const container = containerRef.current;
        const canvas = canvasRef.current;
        
        // Create scene
        const scene = new THREE.Scene();
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(
          75, 
          container.clientWidth / container.clientHeight, 
          0.1, 
          1000
        );
        camera.position.z = 5;
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(2, 2, 5);
        scene.add(directionalLight);
        
        // Create floating spheres
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);
        
        const colors = [
          0x0EA5E9, // vibrant blue
          0x8B5CF6, // vibrant purple 
          0xEC4899, // vibrant pink
          0xF97316, // vibrant orange
          0x10B981, // vibrant green
        ];
        
        // Create 7 spheres with different materials
        for (let i = 0; i < 7; i++) {
          const geometry = new THREE.SphereGeometry(0.4, 32, 32);
          
          let material;
          if (i % 3 === 0) {
            // Glass material
            material = new THREE.MeshPhysicalMaterial({
              color: colors[i % colors.length],
              metalness: 0.2,
              roughness: 0.1,
              transmission: 0.9,
              thickness: 0.5,
            });
          } else if (i % 3 === 1) {
            // Metallic material
            material = new THREE.MeshStandardMaterial({
              color: colors[i % colors.length],
              metalness: 0.9,
              roughness: 0.1,
            });
          } else {
            // Matte material
            material = new THREE.MeshStandardMaterial({
              color: colors[i % colors.length],
              metalness: 0.1,
              roughness: 0.8,
            });
          }
          
          const sphere = new THREE.Mesh(geometry, material);
          
          // Position spheres in a scattered pattern
          const angle = (i / 7) * Math.PI * 2;
          const radius = 1.5 + Math.random() * 0.5;
          sphere.position.x = Math.cos(angle) * radius;
          sphere.position.y = Math.sin(angle) * radius * 0.7; // Flatten the y-axis slightly
          sphere.position.z = (Math.random() - 0.5) * 2;
          
          // Add subtle scale variation
          const scale = 0.7 + Math.random() * 0.6;
          sphere.scale.set(scale, scale, scale);
          
          sphereGroup.add(sphere);
        }
        
        // Add orbit controls with limits
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.3;
        
        // Limit vertical orbit
        controls.minPolarAngle = Math.PI / 3;
        controls.maxPolarAngle = Math.PI / 1.5;
        
        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return;
          
          const width = containerRef.current.clientWidth;
          const height = containerRef.current.clientHeight;
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Animation loop
        let frame = 0;
        const animate = () => {
          const animationId = requestAnimationFrame(animate);
          frame += 0.005;
          
          // Rotate the entire group
          sphereGroup.rotation.y = frame * 0.2;
          
          // Animate individual spheres
          sphereGroup.children.forEach((sphere, i) => {
            // Float up and down with different phases
            const meshSphere = sphere as THREE.Mesh;
            meshSphere.position.y += Math.sin(frame + i * 0.5) * 0.002;
            
            // Subtle rotation
            meshSphere.rotation.x += 0.001;
            meshSphere.rotation.y += 0.002;
          });
          
          controls.update();
          renderer.render(scene, camera);
        };
        
        animate();
        
        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          
          // Dispose geometries and materials
          sphereGroup.children.forEach((sphere) => {
            const mesh = sphere as THREE.Mesh;
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
          });
          
          renderer.dispose();
          scene.clear();
        };
      } catch (error) {
        console.error("Failed to load Three.js:", error);
      }
    };
    
    const cleanup = init();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full absolute inset-0 overflow-hidden pointer-events-none"
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default Hero3D;

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Decal, useTexture } from '@react-three/drei';

// One ball, drawn over the DOM element that reserves its place in the grid.
// The logo is applied on the front and on the back, so it stays readable
// after the ball is dragged around.
const Ball = ({ imgUrl, index, centers, spins, drag }) => {
  const [decal] = useTexture([imgUrl]);
  const group = useRef(null);
  const size = useThree((state) => state.size);

  useFrame(({ clock }) => {
    const center = centers.current[index];
    const spin = spins.current[index];
    if (!group.current || !center || !spin) return;
    // Once released, the ball settles with a logo facing the visitor.
    if (!drag.current || drag.current.index !== index) {
      spin.x += (0 - spin.x) * 0.08;
      spin.y += (Math.round(spin.y / Math.PI) * Math.PI - spin.y) * 0.08;
    }
    const t = clock.elapsedTime * 0.6 + index * 1.7;
    // The camera is orthographic, one unit per pixel: the scale is the radius in pixels.
    group.current.scale.setScalar(center.radius);
    group.current.position.set(
      center.x - size.width / 2,
      size.height / 2 - center.y + Math.sin(t) * 4,
      0
    );
    group.current.rotation.set(
      spin.x + Math.cos(t) / 8,
      spin.y + Math.sin(t) / 8,
      Math.sin(t) / 20
    );
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1.5} flatShading map={decal} />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1.5}
          flatShading
          map={decal}
        />
      </mesh>
    </group>
  );
};

// All balls share one canvas (one WebGL context). Browsers cap the number of
// contexts per page (16 on desktop Chrome, fewer on phones), so one canvas per
// ball stops working as the list grows. The canvas covers the grid and scrolls
// with it; `centers` holds each ball's centre and radius in pixels, the centre
// measured from the grid's top-left corner, `spins` the rotation the visitor gave each ball and `drag`
// which ball is being dragged, if any.
const BallsCanvas = ({ icons, centers, spins, drag, active = true }) => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 1, position: [0, 0, 500], near: 1, far: 1000 }}
      frameloop={active ? 'always' : 'never'}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0.5, 0.8, 1]} />
      <Suspense fallback={null}>
        {icons.map((icon, index) => (
          <Ball
            key={index}
            imgUrl={icon}
            index={index}
            centers={centers}
            spins={spins}
            drag={drag}
          />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default BallsCanvas;

import { Canvas, useFrame } from "@react-three/fiber"
import HeroText from "../Components/HeroText"
import ParallaxBackground from "../Components/ParallaxBackground"
import { Astronaut } from "../Components/Astronaut"
import { OrbitControls,Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"
import { Suspense } from "react"
import Loader from "../Components/Loader"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className=' absolute inset-0 '
        style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
            </Float>
            {/* <OrbitControls /> */}
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 8, 1 + state.mouse.y / 8, 3],
      0.5,
      delta
    );
  });
}

export default Hero
import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return <Html center className=" text-xl font-black text-center">{progress}%loaded</Html>
}

export default Loader
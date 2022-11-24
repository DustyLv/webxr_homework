import React, { useRef } from 'react'
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export const SceneCamera = ({ position = [-5, 2, -5] , rotation=[0,0,0], fov=75 }) => {

    // const ref = useRef();

    useFrame(() => {

       
          
      });
    
    return (
        <PerspectiveCamera
            makeDefault
            rotation={rotation}
            fov={fov}
            position={position}
            near={1}
            far={1000}
        ></PerspectiveCamera>
    );
}

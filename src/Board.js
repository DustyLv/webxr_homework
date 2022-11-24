import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { KeyboardInput } from "./KeyboardInput";
import { KeyboardControls } from "./KeyboardControls";
import { Physics, RigidBody } from "@react-three/rapier";

export const Board = ({ scale = 1, position = [0, 0, 0] }) => {
    // { modelPath, scale = 40, position = [0, 0, 0] }
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "./Board.gltf");
    const [hovered, hover] = useState(false);
    // var boardObject = gltf.scene;


    const { up, down, left, right } = KeyboardControls();



    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        let [horizontal, vertical] = [0, 0];

        if(Number(up) > 0){
            vertical = -1;
        }
        if(Number(down) > 0){
            vertical = 1;
        }
        if(Number(left) > 0){
            horizontal = 1;
        }
        if(Number(right) > 0){
            horizontal = -1;
        }

        // console.log("H: " + horizontal + " |  V: " + vertical);

        ref.current.rotation.x += (0.01 * vertical);
        ref.current.rotation.z += (0.01 * horizontal);
        // ref.current.RigidBody.rotation.x += (0.01 * vertical);
        // ref.current.RigidBody.rotation.z += (0.01 * horizontal);

    });

    return (
        <>
            <primitive
                ref={ref}
                object={gltf.scene}
                position={position}
                // scale={hovered ? scale * 1.2 : scale}
                scale={scale}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}
            />
        </>
    );
};

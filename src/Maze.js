import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Physics, useBox } from "@react-three/cannon";
import { Physics, RigidBody, Debug, MeshCollider } from "@react-three/rapier";

export const Maze = ({ scale = 1, position = [0, 0, 0] }) => {
    const bodyRef = React.useRef();
    const gltf = useLoader(GLTFLoader, "./Maze.glb");

    return (
        <>
            <RigidBody
                type="fixed"
                ref={bodyRef}
                colliders={"trimesh"}
                name="Maze"
            >
                <primitive
                    ref={bodyRef}
                    object={gltf.scene}
                    position={position}
                    scale={scale}
                >
                    <meshPhysicalMaterial color="gray" />
                </primitive>
            </RigidBody>
        </>
    );
};

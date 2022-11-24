import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import {
    Environment,
    Loader,
} from "@react-three/drei";
import { Physics, RigidBody, Debug } from "@react-three/rapier";
import { SceneCamera } from "./SceneCamera";

import { Maze } from "./Maze";
import { Player } from "./Player";
import { Ground } from "./Ground";
import { Finish } from "./Finish";

function App() {
    return (
        <>
            <Canvas shadows="true" style={{ width: "100wvw", height: "100vh" }}>
                <Suspense fallback={null}>
                    <Physics>
                        {/* <Debug /> */}
                        <Ground
                            position={[0, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            size={100}
                        />
                        <Player position={[0, 2, -45]} />
                        <Maze scale={15}/>
                        <Finish
                            position={[0, 2, 37]}
                            sizeX={20}
                            sizeY={4}
                            sizeZ={10}
                        />
                    </Physics>

                    <directionalLight
                        position={[5, 10, 30]}
                        intensity={0.5}
                        castShadow
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                    />

                    <Environment preset="park" background="true" />
                    {/* <OrbitControls /> */}
                    <SceneCamera
                        position={[0, 85, 0]}
                        rotation={[Math.PI / 2, Math.PI, Math.PI * 2]}
                        fov={70}
                    />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
}

export default App;

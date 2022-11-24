import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { Physics, useBox, useSphere } from '@react-three/cannon'
import { Physics, RigidBody, Debug, BallCollider } from "@react-three/rapier";
import PlayerInput from "./PlayerInput";
import { Vector3 } from "three";
import { Sphere } from "@react-three/drei";

// https://stackoverflow.com/questions/69955057/how-to-control-movement-of-a-person-in-react-three-fiber

export function Player(props) {

    const bodyRef = React.useRef();

    const { forward, backward, left, right, jump } = PlayerInput();

      useFrame(() => {

        // Calculating front/side movement ...
        let frontVector = new Vector3(0,0,0);
        let sideVector = new Vector3(0,0,0);
        let direction = new Vector3(0,0,0);

        frontVector.set(0, 0, Number(forward) - Number(backward))
        sideVector.set(Number(right) - Number(left), 0, 0)
        direction
          .subVectors(frontVector, sideVector)
          .normalize()
          .multiplyScalar(2)

        bodyRef.current?.applyImpulse(direction, true);

      })

    return (
        <>
            <RigidBody
                type="dynamic"
                ref={bodyRef}
                name="Player"
            >
                <Sphere castShadow receiveShadow position={props.position}>
                    <meshPhysicalMaterial color="gray" />
                </Sphere>
                <BallCollider args={[1]} position={props.position} />
            </RigidBody>
        </>
    );
}

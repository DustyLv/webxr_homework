import React, { useRef } from "react";
import { Box, Plane, Sphere, RoundedBox } from "@react-three/drei";
import {
    Physics,
    RigidBody,
    Debug,
    CuboidCollider,
    CuboidColliderProps,
} from "@react-three/rapier";
// import { Physics, useBox, usePlane } from '@react-three/cannon'

export function Ground(props) {
    const bodyRef = useRef();

    return (
        <>
            <RigidBody
                type="fixed"
                ref={bodyRef}
                name="Ground"
            >
                <Plane
                    castShadow
                    receiveShadow
                    args={[props.size, props.size]}
                    {...props}
                >
                    <meshPhysicalMaterial color="gray" />
                </Plane>

                <CuboidCollider args={[props.size / 2, 0.1, props.size / 2]} />
            </RigidBody>
        </>
    );
}

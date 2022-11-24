import React, { useRef, useState } from "react";
import { Box, Plane, Sphere, RoundedBox, Text } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

export function Finish(props) {
    const bodyRef = useRef();
    const [active, setActive] = useState(false);

    return (
        <>
            <RigidBody
                type="fixed"
                ref={bodyRef}
                name="Ground"
                colliders={false}
                onCollisionEnter={({ manifold, target, other }) => {
                    if (other.rigidBodyObject) {
                        if (other.rigidBodyObject.name == "Player") {
                            if (active == false) {
                                setActive(!active);
                            }
                            console.log("Collided player ----");
                        }
                    }
                }}
            >
                <Text
                    position={props.position}
                    rotation={[Math.PI / 2, Math.PI, Math.PI * 2]}
                    color={"#51ad0a"}
                    fontSize={20}
                    // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    anchorX="center"
                    anchorY="middle"
                    visible={active ? true : false}
                >
                    {"Finished!"}
                </Text>

                <CuboidCollider
                    args={[props.sizeX / 2, props.sizeY / 2, props.sizeZ / 2]}
                    position={props.position}
                />
            </RigidBody>
        </>
    );
}

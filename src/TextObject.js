import React, { useState, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
// import { useControl } from "react-three-gui"
import { Text, OrbitControls, MapControls } from "@react-three/drei"

export function TextObject(props) {
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(true)
    const ref = useRef()
    const { viewport } = useThree()
    // const color = "#EC2D2D"
    const fontSize = props.textSize
    const maxWidth = "90"
    const lineHeight = "0.75"
    const letterSpacing = "-0.08"
    const generaltext = props.text
    // console.log(hovered)
    const position = props.position
    const rotation = props.rotation
  
    return (
      <Text
        ref={ref}
        position={position}
        rotation={rotation}
        // color={hovered ? "grey" : "#EC2D2D"}
        color={"#51ad0a"}
        // onClick={(e) => setActive(!active)}
        // fontSize={active ? "24" : "32"}
        fontSize={props.textSize}
        maxWidth={(viewport.width / 100) * maxWidth}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        visible = {true}
        // visible={active ? true : false}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
        >
        {generaltext}
      </Text>
    )
  }
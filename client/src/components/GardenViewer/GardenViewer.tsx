import { Global } from "types";
import * as THREE from 'three';
import { Canvas, extend, ReactThreeFiber, useFrame, useThree } from '@react-three/fiber';
import { MainContainer, Tooltip } from "./GardenViewer.styled";
import { useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { clone } from "lodash";
import { rgb } from "polished";

const colors = {
    default: rgb(14, 112, 38),
    Flowerbed: rgb(94, 53, 21),
    Flower: rgb(47, 0, 255)
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

extend({ OrbitControls });

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef<OrbitControls>();
    useFrame((state) => (controls as React.MutableRefObject<OrbitControls>).current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
};


const Box = (props: { meshProps: JSX.IntrinsicElements['mesh'], color: string, dimensions: [number, number, number], isHovered: boolean, onHover: () => void, onHoverOut: () => void }) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const { meshProps, dimensions, onHover, onHoverOut, isHovered, color } = props;
    return (
        <mesh
            {...meshProps}
            ref={mesh}
            onPointerOver={(event) => onHover()}
            onPointerOut={(event) => onHoverOut()}>
            <boxGeometry args={dimensions} />
            <meshStandardMaterial color={isHovered ? 'white' : color} />
        </mesh>
    )
};

const GardenViewer = ({ garden }: Props) => {
    const [hovered, setHover] = useState<string | null>(null);
    return (<MainContainer>
        {hovered && <Tooltip>{hovered}</Tooltip>}
        <Canvas camera={{ fov: 45, position: [garden.Width, Math.max(garden.Width, garden.Height, garden.Length), garden.Length] }}>
            <CameraControls />
            <ambientLight />
            <pointLight position={[garden.Width / 2, Math.max(garden.Width, garden.Height, garden.Length), garden.Length / 2]} />
            <GardenObjects garden={garden} onHover={setHover} hoveredItem={hovered} />
        </Canvas>
    </MainContainer>);
}

const GardenObjects = ({ garden, onHover, hoveredItem }: { garden: Global.Garden, onHover: Function, hoveredItem: string | null }) => {
    const objectJSX: JSX.Element[] = [];

    const remainingObjects: { object: Global.Garden, anchorPoint: [number, number, number] }[] = [{ object: garden, anchorPoint: [0, 0, 0] }];

    let objectCount = 0;
    while (remainingObjects.length) {
        const { object, anchorPoint } = remainingObjects.shift() as typeof remainingObjects[0];
        const { Width, Length, Height, X, Y, Z, Name, Objects } = object;
        const positionWithAnchor: [number, number, number] = [X + anchorPoint[0], Y + anchorPoint[1], Z + anchorPoint[2]];
        let newAnchorPoint: [number, number, number] = clone(positionWithAnchor);

        const id = `${Name} (ID: ${objectCount})`;
        positionWithAnchor[2] += Length / 2;
        positionWithAnchor[0] += Width / 2;
        positionWithAnchor[1] += Height / 2;

        objectJSX.push(
            <Box
                color={(colors as any)[Name] || colors.default}
                key={id}
                meshProps={{ position: new THREE.Vector3(...positionWithAnchor) }}
                dimensions={[Width, Height, Length]}
                onHover={() => onHover(id)}
                onHoverOut={() => onHover(null)}
                isHovered={hoveredItem === id}
            />
        );

        newAnchorPoint[1] += Height;

        if (Objects) {
            remainingObjects.push(...Objects.map(o => ({
                object: o,
                anchorPoint: newAnchorPoint
            })));
        }

        objectCount++;
    }

    return <>{objectJSX}</>;
};

type Props = {
    garden: Global.Garden;
}

export default GardenViewer;
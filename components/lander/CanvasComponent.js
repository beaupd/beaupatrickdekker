import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const defaultConfig = {
    size: 8, // size of particle space ::: 12
    paddingScreen: 42, // padding around particles ::: 400
    scale: 0.01, // scale of particles ::: 0.01
    intensity: 14, // intensity of y sinusoidal ::: 50
    difference: 6.6, // intensity of the difference between particles ::: 1
    lightZ: 2, // z position of point light ::: 1
    xWaves: true, // sinosoidal x aswell
    color: "#B80C09", // # B80C09
};

const CanvasComponent = ({ config = defaultConfig }) => {
    const {
        size,
        paddingScreen,
        scale,
        intensity,
        difference,
        lightZ,
        xWaves,
        color,
    } = config;
    // const camera = new THREE.PerspectiveCamera(60, 320 / 240, 0.1, 1000)
    // camera
    // camera.lookAt(0,0,0)

    // const Camera = () => {
    //     const { mouse } = useThree();

    //     useFrame(({ clock, camera }) => {
    //         // camera.position.z = 10 + Math.sin(clock.getElapsedTime()) * 3;
    //         camera.rotation.y = THREE.MathUtils.lerp(
    //             camera.rotation.y,
    //             -(mouse.x * Math.PI) / 100,
    //             0.1
    //         );
    //         camera.rotation.x = THREE.MathUtils.lerp(
    //             camera.rotation.x,
    //             (mouse.y * Math.PI) / 100,
    //             0.1
    //         );
    //         // camera.position.x = mouse.x * 0.3;
    //         // camera.position.y = mouse.y * 0.3;
    //         // camera.position.z = 6;
    //     });
    //     return null;
    // };

    const Particles = ({ temp = new THREE.Object3D() }) => {
        const mesh = useRef();
        const paddingX = (window.innerWidth / 100) * paddingScreen;
        const paddingY = (window.innerHeight / 100) * paddingScreen;
        let wExtra = (window.innerWidth - paddingX) % size;
        const w = Math.round((window.innerWidth - wExtra - paddingX) / size);
        let hExtra = (window.innerHeight - paddingY) % size;
        const h = Math.round((window.innerHeight - hExtra - paddingY) / size);

        useFrame((state) => {
            let i = 0;
            const time = state.clock.getElapsedTime();

            for (let x = 0; x < w; x++) {
                for (let y = 0; y < h; y++) {
                    const id = i++;

                    if (xWaves) {
                        temp.position.set(
                            x * size +
                                size / 2 +
                                paddingX +
                                wExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerWidth) /
                                    2 -
                                paddingX / 2,
                            y * size +
                                size / 2 +
                                paddingY +
                                hExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerHeight) /
                                    2 -
                                paddingY / 2,
                            1
                        );
                    } else {
                        temp.position.set(
                            x * size +
                                size / 2 +
                                paddingX +
                                wExtra / 2 -
                                window.innerWidth / 2 -
                                paddingX / 2,
                            y * size +
                                size / 2 +
                                paddingY +
                                hExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerHeight) /
                                    2 -
                                paddingY / 2,
                            1
                        );
                    }
                    temp.position.y += 0.01;
                    temp.updateMatrix();
                    mesh.current.setMatrixAt(id, temp.matrix);
                }
            }
            mesh.current.instanceMatrix.needsUpdate = true;
        });

        useEffect(() => {
            mesh.current.instanceMatrix.needsUpdate = true;
        }, []);

        return (
            <instancedMesh ref={mesh} scale={scale} args={[null, null, w * h]}>
                <circleGeometry />
                <meshStandardMaterial color={color} />
            </instancedMesh>
        );
    };

    return (
        <Canvas style={{ position: "absolute", left: 0, top: 0 }}>
            <pointLight position={[0, 0, lightZ]} />
            <Particles />
            {/* <Camera /> */}
        </Canvas>
    );
};

export default CanvasComponent;

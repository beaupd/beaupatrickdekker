import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CanvasComponent = () => {
    const size = 11; // size of particle space ::: 12
    const padding = 400; // padding around particles ::: 400
    const scale = 0.01; // scale of particles ::: 0.01
    const intensity = 50; // intensity of y sinusoidal ::: 50
    const difference = 1; // intensity of the difference between particles ::: 1
    const lightZ = 5; // z position of point light ::: 1
    const xWaves = false; // 

    const Particles = ({ temp = new THREE.Object3D() }) => {
        const mesh = useRef();
        let wExtra = (window.innerWidth - padding) % size;
        const w = Math.round((window.innerWidth - wExtra - padding) / size);
        let hExtra = (window.innerHeight - padding) % size;
        const h = Math.round((window.innerHeight - hExtra - padding) / size);

        // console.log(
        //     " width: ",
        //     window.innerWidth,
        //     w,
        //     "\n",
        //     "height: ",
        //     window.innerHeight,
        //     h,
        //     "\n",
        //     "total: ",
        //     w * h
        // );

        useFrame((state) => {
            let i = 0;
            const time = state.clock.getElapsedTime();

            for (let x = 0; x < w; x++) {
                for (let y = 0; y < h; y++) {
                    const id = i++;
                    temp.position.set(
                        x * size +
                            size / 2 +
                            padding +
                            wExtra / 2 -
                            window.innerWidth / 2 -
                            padding / 2,
                        y * size +
                            size / 2 +
                            padding +
                            hExtra / 2 +
                            (Math.sin(time + i * difference) * intensity -
                                window.innerHeight) /
                                2 -
                            padding / 2,
                        1
                    );

                    if (xWaves) {
                        temp.position.set(
                            x * size +
                                size / 2 +
                                padding +
                                wExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerWidth) /
                                    2 -
                                padding / 2,
                            y * size +
                                size / 2 +
                                padding +
                                hExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerHeight) /
                                    2 -
                                padding / 2,
                            1
                        );
                    } else {
                        temp.position.set(
                            x * size +
                                size / 2 +
                                padding +
                                wExtra / 2 -
                                window.innerWidth / 2 -
                                padding / 2,
                            y * size +
                                size / 2 +
                                padding +
                                hExtra / 2 +
                                (Math.sin(time + i * difference) * intensity -
                                    window.innerHeight) /
                                    2 -
                                padding / 2,
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
                <meshStandardMaterial color="#B80C09" />
            </instancedMesh>
        );
    };

    return (
        <Canvas style={{ position: "absolute", left: 0, top: 0 }}>
            <pointLight position={[0, 0, lightZ]} />
            <Particles />
        </Canvas>
    );
};

export default CanvasComponent;

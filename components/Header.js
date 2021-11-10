import styles from "../styles/Header.module.css";
import { useRef, useEffect, useState } from "react"

const Header = () => {
    const canvasRef = useRef(null)
    const [fps, setFps] = useState(0) 

    useEffect(()=>{
        const times = [];

        function refreshLoop() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
            }
            times.push(now);
            setFps(times.length)
            refreshLoop();
        });
        }

        refreshLoop();


        const c = canvasRef.current
        const ctx = c.getContext("2d", {alpha: false})
        c.width = window.innerWidth * window.devicePixelRatio
        c.height = window.innerHeight * window.devicePixelRatio
        const idata = ctx.createImageData(c.width, c.height)
        const buffer32 = new Uint32Array(idata.data.buffer)

        const resizeHandler = () => {
            c = canvasRef.current
            ctx = c.getContext("2d", {alpha: false})
            c.width = window.innerWidth * window.devicePixelRatio
            c.height = window.innerHeight * window.devicePixelRatio
            idata = ctx.createImageData(c.width, c.height)
            buffer32 = new Uint32Array(idata.data.buffer)
        }
        
        let toggle = false
        function loop() {
            if (toggle) noise(ctx)
            else toggle = !toggle
            requestAnimationFrame(loop)
        }
        
        function noise(ctx) {
            let len = buffer32.length - 1
            while(len--) buffer32[len] = Math.random() < 0.5 ? 0 : 0xffffffff>>0
            ctx.putImageData(idata, 0, 0)
        }

        loop({})
        resizeHandler()

        

        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [])

    return (
        <section className={styles.headerContainer}>
            {fps}
            <canvas ref={canvasRef} className={styles.canvas} />
            <header>
                <h2>Beau Patrick Dekker</h2>
                <p>Everything web</p>
            </header>
        </section>
    )
}

export default Header
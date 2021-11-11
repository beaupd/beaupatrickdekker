import Layout from "../components/layouts/main"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Page = () => {

    return (
        <Layout>
            <section className="h-screen w-full flex justify-center items-center">
                <div className="z-0 absolute w-full h-full left-0 top-0">
                    <Image src="/snowy.jpg" layout="fill" objectFit="cover" priority="priority" />
                    {/* placeholder="blur" blurDataURL="/blur_data.jpg" */}
                </div>
                <div className="absolute z-10 h-full w-full opacity-60 bg-blue"></div>
                <div className="container z-20 text-center w-1/2">
                    <header className="text-4xl text-light">
                        <h1>Beau Patrick Dekker</h1>
                    </header>
                    <p className="text-light relative mb-5">Everything web</p>
                    <motion.button
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        className="text-light border-2 px-4 py-2 before:content[''] before:absolute relative before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 transition-all duration-300 ease-in-out before:bg-light border-light hover:text-dark before:z-min">
                        <a>Get into Contact!</a>
                    </motion.button>
                </div>
            </section>

            <section className="relative my-14">
                <div className="container mx-auto w-2/3 relative after:border-b-4 after:content-[''] after:absolute before:absolute after:w-full before:h-full after:right-14 after:bottom-0 before:left-0 before:top-14 pt-10 pr-10 after:z-10 before:z-10 before:content-[''] before:border-l-4">
                    <div className="pt-20 flex items-stretch h-96">
                        <div className="bg-blue w-64 block relative rounded-tr-lg">
                            <Image src="/beau_dekker.png" layout="fill" objectFit="cover" className="w-full h-full rounded-tr-lg" quality="100"/>
                        </div>
                        <div className="p-5 flex-grow mr-36">
                            <header>
                                <h2 className="font-bold uppercase text-2xl">Who am I?</h2>
                            </header>
                            <p className="py-2">I am a "Junior" full stack developer.</p>
                            <button className="text-dark border-2 px-4 py-2 mx-auto container mt-5  before:content[''] before:absolute relative before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 transition-all duration-300 ease-in-out before:bg-dark border-dark hover:text-light before:z-min">
                                More About me
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="container mx-auto center w-1/2 m-10">
                    <header className="flex items-center align-center">
                        {/* <Image src="/logo.png" width="50" height="50" /> */}
                        <h2 className="font-bold uppercase text-2xl">About this site</h2>
                    </header>
                    <p className="pt-5">this site is my portfolio</p>
                </div>
            </section>

        </Layout >
    )
}

export default Page
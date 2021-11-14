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
                        transition={{ ease: "easeOut", duration: 0.3 }}
                        className="text-light border-2 px-4 py-2 before:content[''] before:absolute relative before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 transition-all duration-300 ease-in-out before:bg-light border-light hover:text-dark before:z-min">
                        <a>Get into Contact!</a>
                    </motion.button>
                </div>
            </section>

            <section className="relative mt-14 mb-36">
                <div className="container mx-auto w-3/4 lg:w-2/3 relative lg:after:border-b-4 lg:after:content-[''] lg:after:absolute lg:before:absolute lg:after:w-full lg:before:h-full lg:after:right-14 lg:after:bottom-0 lg:before:left-0 lg:before:top-14 pt-10 lg:pr-14 lg:after:z-10 lg:before:z-10 lg:before:content-[''] lg:before:border-l-4">
                    <div className="pt-10 lg:pt-20 flex flex-col lg:flex-row h-120 lg:h-96">
                        <div className="bg-blue h-full lg:w-64 block relative rounded-sm lg:rounded-none lg:rounded-tr-lg min-w-max flex-grow-0 lg:flex-shrink-0">
                            <Image src="/beau_dekker.png" layout="fill" objectFit="cover" className="w-full h-full rounded-sm lg:rounded-none lg:rounded-tr-lg" quality="100" />
                        </div>
                        <div className="p-5 lg:mr-1/4 flex-grow-0">
                            <div className="w-full">
                                <header>
                                    <h2 className="font-bold uppercase text-2xl">Who am I?</h2>
                                </header>
                                <p className="py-2 h-full w-full text-xs md:text-sm  xl:text-base 2xl:text-lg whitespace-normal">
                                    I am a "Junior" full stack developer. I love developing anything web related. I dont like to define myself by the work I've done (maybe also because im a Junior developer but...). I define myself by the work I want to do. Skills can be taught, personality is inherent. I'm a quick learner and thats why I like to keep challenging myself with each project, and learn as much as possible.
                                </p>
                            </div>
                            <button className="text-dark border-2 px-4 py-2 mx-auto container mt-2 xl:mt-5  before:content[''] before:absolute relative before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 transition-all duration-300 ease-in-out before:bg-dark border-dark hover:text-light before:z-min">
                                More About me
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-screen"><br></br></section>

        </Layout >
    )
}

export default Page
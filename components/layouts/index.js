import dynamic from "next/dynamic";

const Container = dynamic(() => import("./Container"));
const Main = dynamic(() => import("./Main"));

export {Container, Main}

import dynamic from "next/dynamic";

const Container = dynamic(() => import("./Container"));

export {Container}

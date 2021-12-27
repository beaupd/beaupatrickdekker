import dynamic from "next/dynamic";

const Heading1 = dynamic(() => import("./Heading1"));
const Heading2 = dynamic(() => import("./Heading2"));
const Heading3 = dynamic(() => import("./Heading3"));

export {Heading1, Heading2, Heading3}

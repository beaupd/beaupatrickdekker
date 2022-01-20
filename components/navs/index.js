import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"));
const TextLink = dynamic(() => import("./TextLink"));
const Button = dynamic(() => import("./Button"));

export {Navbar, TextLink, Button}

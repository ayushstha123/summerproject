import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/hero";
import HeroMenu from "./components/layout/HomeMenu";
import Packages from "./components/layout/Packages";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <HeroMenu/>
    <Packages/>
    </>
  );
}

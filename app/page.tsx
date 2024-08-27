import Image from "next/image";
import styles from "./page.module.css";
import AppBar from "./components/Hero/Appbar/AppBar";
import Hero from "./components/Hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import JobSection from "./components/JobSection/JobSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
      <NextUIProvider>
    <main className={styles.main}>
      <Hero/>
      <JobSection/>
      
    </main>
    </NextUIProvider>
  );
}

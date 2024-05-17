import Clientinsta from "@/Components/Clientinsta";
import CollectionBlack from "@/Components/CollectionBlack";
import Fixedimage from "@/Components/Fixedarea";
import Footer from "@/Components/Footer";

import Header from "@/Components/Header";
import Logoslider from "@/Components/Logoslider";
import Navbar from "@/Components/Navbar";
import Servicesection from "@/Components/Servicesection";
import TabSection from "@/Components/TabSection";
import Tabsectionpart2 from "@/Components/Tabsectionpart2";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        {/* <Navbar /> */}
        <TabSection />
        <CollectionBlack />
        <Tabsectionpart2 />
        <Fixedimage />
        <Servicesection />
        <Testimonials />
        <Clientinsta />
        <Logoslider />
        <Footer/>
      </div>
    </>
  );
}

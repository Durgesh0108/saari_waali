import CollectionBlack from "@/Components/CollectionBlack";
import Fixedimage from "@/Components/Fixedarea";


import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Servicesection from "@/Components/Servicesection";
import TabSection from "@/Components/TabSection";
import Tabsectionpart2 from "@/Components/Tabsectionpart2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <TabSection />
        <CollectionBlack />
        <Tabsectionpart2 />
        <Fixedimage />
        <Servicesection />
      </div>
    </>
  );
}

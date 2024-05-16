import CollectionBlack from "@/Components/CollectionBlack";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import TabSection from "@/Components/TabSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Navbar />
        <TabSection />
        <CollectionBlack />
      </div>
    </>
  );
}

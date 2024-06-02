import Navbar from "./components/Navbar";
import Topic from "./components/Topic";
import CardBody from "./components/CardBody";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Topic />
        <CardBody />
      </main>
      <Contact
        className="h-[400px]" />
    </>
  );
};
import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Cook from "./components/Cook/index";
import Expert from "./components/Expert/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <About />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  );
}

import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Cook from "./components/Cook/index";
import Transportation from "./components/transportation/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/about";
import Academics from "./components/academics";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <About />
      <Cook />
      <Transportation />
      <Academics />
      <Gallery />
      <Newsletter />
    </main>
  );
}

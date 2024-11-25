import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Transportation from "./components/transportation/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/about";
import Grades from "./components/grades";
import Location from "./components/location/page";
import Smile from "./components/Smile/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Features />
      <Location />
      <Smile />
      {/* <Transportation /> */}
      <Grades />
      <Gallery />
      <Newsletter />
    </main>
  );
}

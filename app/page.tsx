import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Cook from "./components/Cook/index";
import Transportation from "./components/transportation/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/about";
import Grades from "./components/grades";
import Location from "./components/location/page";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Features />
      <Location />
      <Cook />
      {/* <Transportation /> */}
      <Grades />
      <Gallery />
      <Newsletter />
    </main>
  );
}

import Navbar from "../Component/Navbar";
import WelcomeBanner from "../Component/WelcomeBanner";
import Carousel from "../Component/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <WelcomeBanner />
    </div>
  );
}

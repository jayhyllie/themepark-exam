import AnimatedPage from "../../Components/Animations/AnimatedPage";
import Button from "../../Components/Buttons/Button";
import Carousel from "../../Components/Carousel/Carousel";
import { images } from "../../utils/images";
import './Home.css';

const Home = () => {
  return (
    <AnimatedPage>
      <section className="hero">
        <Carousel images={images} />
      </section>
      <section style={{ display: "flex", justifyContent: "center", gap: "2em", marginTop: "4em"}}>
        <Button title="Mer info" className="primary" />
        <Button title="Köp biljett" className="secondary" />
      </section>
    </AnimatedPage>
  )
}

export default Home;
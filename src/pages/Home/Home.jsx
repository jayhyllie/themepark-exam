import AnimatedPage from "../../Components/Animations/AnimatedPage";
import Card from "../../Components/Card/Card";
import { cards } from "../../utils/props";
import { imagesFull } from "../../utils/images";
import "./Home.css";

const Home = () => {
  let randomArray = [];
  while (randomArray.length < imagesFull.length) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * imagesFull.length);
    } while (randomArray.includes(randomIndex));

    randomArray.push(randomIndex);
  }

  const randomImages = randomArray.map((index) => imagesFull[index]);

  return (
    <AnimatedPage>
      <section className="wrapper home">
        <section className="cards">
          {cards.map((card, i) => (
            <Card
              key={i}
              title_long={card.title_long}
              title={card.title}
              subTitle={card.subTitle}
              link={card.link}
              buttonTitle={card.buttonTitle}
              className={card.className}
              randomImage={randomImages[i]}
            />
          ))}
        </section>
      </section>
    </AnimatedPage>
  );
};

export default Home;

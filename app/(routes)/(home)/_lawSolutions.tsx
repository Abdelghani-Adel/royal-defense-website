import MyCard from "@/app/_components/_common/MyCard";
import CarouselSlider from "@/app/_components/ui/CarouselSlider";
import solutions from "@/public/data/solutions.json";
import { v4 } from "uuid";

const LawSolutions = () => {
  return (
    <CarouselSlider>
      {solutions.law.map((card, i) => (
        <div
          key={v4()}
          data-aos="fade-up"
          data-aos-delay={(i + 1) * 100}
          data-aos-offset={100}
        >
          <div className="py-4">
            <MyCard
              title={card.title}
              image={card.img}
              text={card.desc}
              urlTarget={card.urlTarget}
            />
          </div>
        </div>
      ))}
    </CarouselSlider>
  );
};

export default LawSolutions;

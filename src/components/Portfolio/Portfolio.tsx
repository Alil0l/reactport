import Card from "../Card/Card";
import Title from "../Helpers/Title";
import "./Portfolio.css";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Title title="portfolio component" />
      <div className="cards">
        <Card img={port1} />
        <Card img={port2} />
        <Card img={port3} />
        <Card img={port1} />
        <Card img={port2} />
        <Card img={port3} />
      </div>
    </div>
  );
}

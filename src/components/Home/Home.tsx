import avater from "../../assets/avater.svg";
import Title from "../Helpers/Title";
import "./Home.css";
// A333333

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img src={avater} alt="" />
      </div>
      <Title title={"Start Framwork"} />
      <p>FrontEnd Developer , UI Designer , Flutter Developer</p>
    </div>
  );
}

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Title.css";

export default function Title({ title }: Title) {
  return (
    <>
      <h1 className="tit">{title}</h1>
      <div className="lines">
        <div className="line"></div>
        <FontAwesomeIcon icon={faStar} />
        <div className="line"></div>
      </div>
    </>
  );
}

type Title = {
  title: string;
};

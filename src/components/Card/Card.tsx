import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Card({ img }: Image) {
  const [modal, setModal] = useState(false);
  function handleOverlay() {
    setModal(!modal);
  }

  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="overlay" onClick={handleOverlay}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      {modal && (
        <div className="popup" onClick={handleOverlay}>
          <img src={img} alt="" />
        </div>
      )}
    </>
  );
}

type Image = {
  img: string;
};

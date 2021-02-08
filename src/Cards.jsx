import React from "react";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.stype}</span>
            <h3 className="card__title">{props.stitle}</h3>
            <a href={props.slink} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

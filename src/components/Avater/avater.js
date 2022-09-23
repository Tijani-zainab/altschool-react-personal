import React from "react";


function Avater(props) {
  return (
    <div className="avater">
      <img src={props.image} alt="avater" />
    </div>
  );
}

export default Avater;
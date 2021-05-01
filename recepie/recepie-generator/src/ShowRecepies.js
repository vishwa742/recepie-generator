import React, { useState, useEffect } from "react";

function ShowRecepies({ recepie }) {
  return (
    <>
      <div className="mainbar">
        <h1 style={{ textAlign: "center" }}>Your Recepies</h1>
        {/* <div>
          {recepie.map((indrec) => (
            <div>
              <div>{indrec.title}</div>
              <img src={indrec.image} />
            </div>
          ))}
        </div> */}
        <button
          onClick={() => {
            console.log(recepie);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
}
export default ShowRecepies;

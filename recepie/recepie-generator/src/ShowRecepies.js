import React, { useState, useEffect } from "react";

function ShowRecepies({ recepie }) {
  return (
    <>
      <div className="mainbar">
        <h1 style={{ textAlign: "center" }}>Your Recepies</h1>

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

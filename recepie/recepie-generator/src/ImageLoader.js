// OCR Tutorial from: https://javascript.plainenglish.io/react-tesseract-ocr-tutorial-d72bb04b5094

import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUploader from "react-images-upload";
import ClipLoader from "react-spinners/ClipLoader";

function ImageLoader() {
  const [picUrl, setPicUrl] = useState([]);
  const [ocrText, setOcrText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [store, setStore] = useState("");
  const [words, setWords] = useState([]);
  var tester = [];

  const removedWords = [
    "Product",
    "aty:",
    "Z Total:",
    "Order",
    "Summary item",
    "item",
    "Subtotat",
    "Sales",
    "Tax",
    "Total",
    "Total:",
    "best",
  ];

  const onDrop = (_, pictureUrl) => {
    setPicUrl(pictureUrl);
  };

  const runOcr = () => {
    picUrl.forEach((picture) =>
      Tesseract.recognize(picture, "eng").then(({ data: { text } }) => {
        text = text.replace(/[0-9]/g, "");
        text = text.replace(/[$.,]/g, "");

        const textSting = text.replace(" ", ",");

        text = text.split(" ");

        const wordFiltered = new Set(Array.from(text));
        //console.log(wordFiltered);
        setWords(...words, wordFiltered);
        setWords((oldArray) => [...oldArray, words]);
        //setStore(words.filter((word) => word.length > 3));
        console.log(words);
        setOcrText((oldArray) => [...oldArray, wordFiltered]);
      })
    );
    setIsLoading(true);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Upload Your Grocery Bill</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <ImageUploader
          withIcon={true}
          withPreview={true}
          buttonText="Choose Images"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png"]}
          maxFileSize={5242880}
        />
        <div className="ocr-button" onClick={runOcr}>
          Run OCR
        </div>
        {ocrText.length > 0 ? (
          <ul className="item">
            {words.map((ot) => {
              console.log(ot);
              if (
                ot != "Product" &&
                ot != "aty:" &&
                ot != "Z Total:" &&
                ot != "Summary item" &&
                ot != "Sales" &&
                ot != "item" &&
                ot != "Subtotat" &&
                ot != "Sales" &&
                ot != "Tax" &&
                ot != "Total:" &&
                ot != "Order"
              ) {
                return <div>{ot}</div>;
              }
            })}
          </ul>
        ) : (
          <ClipLoader color="#ffffff" loading={isLoading} size={150} />
        )}
      </div>
    </>
  );
}
export default ImageLoader;

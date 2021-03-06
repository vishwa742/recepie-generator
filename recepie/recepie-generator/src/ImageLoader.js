// OCR Tutorial from: https://javascript.plainenglish.io/react-tesseract-ocr-tutorial-d72bb04b5094

import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import ImageUploader from "react-images-upload";
import ClipLoader from "react-spinners/ClipLoader";
import { useDropzone } from "react-dropzone";
import bill1 from "./1.png";

function ImageLoader({ onAddIngredient }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [picUrl, setPicUrl] = useState([]);
  const [ocrText, setOcrText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [words, setWords] = useState([]);
  const items = words.toString();
  const [recepie, setRecepie] = useState([]);
  const [showIngredients, setShowIngredients] = useState(true);

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
        setWords(...words, wordFiltered);
        setWords((oldArray) => [...oldArray, words]);
        setOcrText((oldArray) => [...oldArray, wordFiltered]);
      })
    );
    // console.log(words);
    // getIngredients(words);
    setIsLoading(true);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Upload Your Grocery Bill</h1>

      {/* <button
        onClick={() => {
          setPicUrl(bill1);
        }}
      >
        Trial
      </button> */}

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
        ></ImageUploader>

        {words.length > 0 ? (
          <div
            className="ocr-button"
            onClick={() => {
              onAddIngredient(words);
              setShowIngredients(false);
              setIsLoading(false);
            }}
          >
            Add Ingredients
          </div>
        ) : (
          <div></div>
        )}

        {words.length <= 0 ? (
          <div className="ocr-button" onClick={runOcr}>
            Get Ingredients
          </div>
        ) : (
          <div></div>
        )}
        {/* {ocrText.length > 0 ? ( */}
        {showIngredients && ocrText.length > 0 ? (
          <ul className="item">
            {words.map((ot) => {
              //console.log(ot);

              return <div>{ot}</div>;
            })}
          </ul>
        ) : (
          <ClipLoader color="#ffffff" loading={isLoading} size={150} />
        )}

        <div>
          {recepie.map((indrec) => (
            <div>
              <div>{indrec.title}</div>
              <img src={indrec.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ImageLoader;

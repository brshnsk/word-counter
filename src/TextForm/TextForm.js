import React from "react";
import Counter from "../Counter/Counter";
import "./TextForm.css";

function TextForm() {
  const [lettersCounter, setLettersCounter] = React.useState(0);
  const [wordsCounter, setWordsCounter] = React.useState(0);

  const onSearchValueChange = (event) => {
    setLettersCounter(event.target.value.length);
    setWordsCounter(
      event.target.value
        .trim()
        .split(/\s+/)
        .filter((word) => word !== "").length
    );
  };

  return (
    <>
      <label htmlFor="Text" className="Label">
        <h1>Ingrese Texto</h1>
      </label>
      <textarea
        className="TextArea"
        name="Text"
        id="Text"
        cols="100"
        rows="40"
        onChange={onSearchValueChange}
      ></textarea>
      <Counter lettersCounter={lettersCounter} wordsCounter={wordsCounter} />
    </>
  );
}

export { TextForm };

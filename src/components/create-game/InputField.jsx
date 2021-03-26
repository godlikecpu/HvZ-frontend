import { useState } from "react";

// Modular input field component

const InputField = ({ placeholder, getState, id }) => {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();
    setText(evt.target.value);
    getState(evt.target.value, id);
  };

  return (
    <>
      <label style={{margin: 5}}>
        <input
          type="text"
          value={text}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={50}
          style={{
            textAlign: "center",
            width: 500,
            height: 35,
            fontSize: 20,
          }}
          className="border"
        />
      </label>
    </>
  );
};

export default InputField;
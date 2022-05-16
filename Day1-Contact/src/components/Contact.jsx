import React from "react";
import { useState } from "react";
import styles from "./css/Shepherd.module.css";

export const Contact = (props) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick(text1, text, phone, phone1);
      setText1("");
      setText("");
      setPhone("");
      setPhone1("");
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            placeholder="Enter your Image"
            type="text"
            value={text1}
            name=""
            id=""
            onChange={(e) => {
              setText1(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter your Name"
            type="text"
            value={text}
            name=""
            id=""
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter your email"
            type="text"
            value={phone}
            name=""
            id=""
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter your Number"
            type="text"
            value={phone1}
            name=""
            id=""
            onChange={(e) => {
              setPhone1(e.target.value);
            }}
          />
        </div>
        <button className={styles.btun} onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

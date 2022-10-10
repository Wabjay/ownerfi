import React, { useRef } from "react";

const Faq = ({ faq, onToggle, active }) => {
  const contentEl = useRef();
  const { question, answer } = faq;
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
    {question}
    <span className="control"></span>
      </button>
      <div ref={contentEl}
  className="answer_wrapper"
  style={
    active
      ? { height: contentEl.current.scrollHeight }
      : { height: "0px" }
  }>
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default Faq;
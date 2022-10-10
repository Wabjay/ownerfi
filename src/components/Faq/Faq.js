import React, { useState } from "react";
import Head from "../Head";
import "./Faq.css"
import Faq from "./AccordionItem";


const Accordion = () => {
   const faqs = [
    {
      question: "What is Ownerfi?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Voluptas praesentium facere?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    }]
    const [clicked, setClicked] = useState("0");
    
    const handleToggle = (index) => {
      if (clicked === index) {
       return setClicked("0");
      }
      setClicked(index);
     };
  return (
    <>
    <Head title="FAQ | Ownerfi"/>
        <ul className="accordion">
      {faqs.map((faq, index) => (
        <Faq  key={index} faq={faq} onToggle={() => handleToggle(index)}
        active={clicked === index}/>
      ))}
    </ul>
    </>
  );
};

export default Accordion;
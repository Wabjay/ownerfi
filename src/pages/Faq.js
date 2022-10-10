
import Head from "../components/Head";
import React from "react";
import Faq from "../components/Faq/Faq";


const Accordion = () => {
 
  return (
    <div className="faq">
    <Head title="FAQ | Ownerfi"/>
    <div className="blogList_banner"><p>Frequently Asked Questions
</p></div>
    <div className="faq_container">
    
      <Faq/>
    </div>
    </div>
  );
};

export default Accordion;
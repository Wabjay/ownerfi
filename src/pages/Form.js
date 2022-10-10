
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import FormCard from "../components/FormCard";

 import FormProvider from "../context/index1";

import {
  Information, 
  Property, 
  Associated, 
  Mortgage, 
  Move
} from "../components/Forms/Form";

import FormCompleted from "../components/FormCompleted";

const Form = () => {
  const location = useLocation()
  console.log(location.state)
  const {address} = location.state

  const [formStep, setFormStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1 );

  useEffect(()=>{
formStep === 0 ? setProgress(16.6) : 
    formStep === 1 ? setProgress(33.3) :
    formStep === 2 ? setProgress(50) :
    formStep === 3 ? setProgress(66.6) :
    formStep === 4 ? setProgress(87.3) :
    setProgress(99.9)
  },[formStep])

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormProvider>
      <FormCard progressBar={progress} currentStep={formStep} prevFormStep={prevFormStep}>
      <div className="container">

        {formStep >= 0 && (
          <Information address={address} formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <Property formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <Associated formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 3 && (
          <Mortgage formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 4 && (
          <Move formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 4 && <FormCompleted />}
    </div>
      </FormCard>
     </FormProvider>
    
  );
};

export default Form;
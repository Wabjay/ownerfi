import { useState, createContext, useContext } from "react";
import React from "react";
export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});


  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };
console.log(data)
  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);

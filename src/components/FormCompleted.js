import React from "react";
import Congrats from '../images/congrats.png'
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function FormCompleted() {
  const navigate = useNavigate();
  // const { setFormValues } = useFormData();
  const complete = ()=>{
    // get value from setFormValue from context
    navigate('/')
  }
  return(
  <div className="congrats">
<img src={Congrats} alt="" className="congratsImg" />
  <h2>Congratulations</h2>
  <p>Your preliminary offer is on the way. A member of our team will be in touch with you.</p>
  <Button type="primary" onClick={complete}> Go to dashboard</Button>
  </div> 
)}

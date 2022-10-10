import React, { useState, useEffect } from "react";
import "./Forms.css";
import 'antd/dist/antd.css';
import { useFormData } from "../../context/index1";
  import { 
    Button,
    Radio,
    Form,
    RadioChangeEvent,
   } from "antd";
  // const { Option } = Select;

export default function Move({progress, formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const [value, setValue] = useState('')

  const handleSubmit = (value) => {
    setFormValues(value)
    console.log(value)
  };



  const [form] = Form.useForm();
  
  useEffect(()=>{
    progress=83.3
  },[])


  return (
    <div className={formStep === 4 ? "showForm" : "hideForm"}>
      {/* <Progress percent={83.3} showInfo={false} /> */}
<p className="formHeader">How soon are you looking to move forward?</p>
    <Form
      form={form}
      name="register"
      onFinish={handleSubmit}
      scrollToFirstError
    >
      <Form.Item
       name='move'
      >
          <Radio.Group className="radio_button"
           onChange={(e: RadioChangeEvent) => {
            setValue(e.target.value)
            console.log(e.target.value)
          }}
          value={value}
          >
            <Radio value="yes"> ASAP </Radio>
            <Radio value="30"> 30 Days </Radio>
            <Radio value="60"> 60 days </Radio>
            <Radio value="90"> 90 Days or more </Radio>
            <Radio value="checking"> Just checking </Radio>
          </Radio.Group>
        </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={nextFormStep}>
          Continue
        </Button>
       
      </Form.Item>
    </Form>
    </div>
  );
}

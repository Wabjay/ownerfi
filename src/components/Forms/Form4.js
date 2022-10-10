import React, {useEffect, useState} from "react";
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

export default function Mortgage({ progress, formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const [value, setValue] = useState('')

  
  const handleSubmit = (value) => {
    setFormValues(value)
    console.log(value)
  };

  const [form] = Form.useForm();
  
  useEffect(()=>{
    progress=66.6
  },[])



  return (
    <div className={formStep === 3 ? "showForm" : "hideForm"}>
      <p className="formHeader">Do you own the home free and clear of any mortgage, taxes or liens?</p>
    <Form
      form={form}
      name="register"
      onFinish={handleSubmit}
      
      scrollToFirstError
    >
      <Form.Item
      name="mortgage"
      >
          <Radio.Group className="radio_button"
           onChange={(e: RadioChangeEvent) => {
            setValue(e.target.value)
            console.log(e.target.value)
          }}
          value={value}
          >
            <Radio value="yes"> Yes </Radio>
            <Radio value="no answer"> Decline to answer </Radio>
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

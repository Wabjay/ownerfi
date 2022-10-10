import React,{ useEffect } from "react";
import "./Forms.css";
import 'antd/dist/antd.css';
import { useFormData } from "../../context/index1";
  import { 
    Button,
    Form,
    Input,
   } from "antd";
  // const {  useState  } = React;

  
export default function Property({progress, formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    console.log(values)
    // nextFormStep();
  };
  
  const [form] = Form.useForm();
  useEffect(()=>{
    progress=33.3
  },[])

  return (
    <div className={formStep === 1 ? "showForm" : "hideForm"}>
      <p className="formHeader">Lets have the basic attributes of your property. </p>
    <Form
      form={form}
      name="register"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="bedroom"
        rules={[
        
          {
            required: true,
            message: 'Please enter the number of bedrooms!',
          },
        ]}
      >
        <Input
        name="bedroom"
         placeholder="Enter the number of bedrooms"/>
      </Form.Item>

      <Form.Item
        name="bathroom"
        label="No of Bathrooms"
        rules={[
          
          {
            required: true,
            message: 'Please enter the number of bathrooms!',
          },
        ]}
      >
        <Input 
         name="bathroom"
        placeholder="Enter the number of bathrooms"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={nextFormStep}>
          Continue
        </Button>
       
      </Form.Item>
    </Form>
    </div>
  )
  };
  
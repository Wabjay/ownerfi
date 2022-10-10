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

export default function Associated({progress, formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const [value, setValue] = useState('')

  const handleSubmit = (value) => {
    setFormValues(value)
    console.log(value)
  };

  const [form] = Form.useForm();

  useEffect(()=>{
    progress=50
  },[])


  return (
    <div className={formStep === 2 ? "showForm" : "hideForm"}>
      <p className="formHeader">How are you associated with the home?</p>
      <Form
        form={form}
        name="register"
        onFinish={handleSubmit}

      >
        <Form.Item
          name='associate'
        >
          <Radio.Group
            className="radio_button"
            onChange={(e: RadioChangeEvent) => {
              setValue(e.target.value)
              console.log(e.target.value)
            }}
            value={value}
          >
            <Radio value="owner" > I am the  owner </Radio>
            <Radio value="manager"> Property Manager </Radio>
            <Radio value="agent"> Agent </Radio>
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

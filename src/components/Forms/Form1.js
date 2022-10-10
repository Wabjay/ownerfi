import React,{ useEffect} from "react";
// import { useLocation } from 'react-router-dom'
import "./Forms.css";
import 'antd/dist/antd.css';
import USA from "../../images/usa.jpg"
import { useFormData } from "../../context/index1";
import { 
    Button,
    Form,
    Input,
    Select,
   } from "antd";
  const { Option } = Select;

  
  export default function Information({address, progress, formStep, nextFormStep }) {
    const { setFormValues } = useFormData();
  //   const {location} = useLocation()
  //   console.log(location)
  // const { address } = location.state
    
    const handleSubmit = (values) => {
      setFormValues(values);
      console.log(values.address);
      console.log(values);
      // nextFormStep();
    };
    
    const [form] = Form.useForm();
    useEffect(()=>{
      progress=16.6
    },[])
  
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        initialValue="+1"
        defaultValue="+1"
        style={{
          width: 70,
        }}
      >
        <Option value="+1" selected><img style={{width: 24, height: 24}} src={USA} alt=""/></Option>
        
      </Select>
    </Form.Item>
  );

  return (
    <div className={formStep === 0 ? "showForm" : "hideForm"}>
      {/* <Progress percent={16.6} showInfo={false} /> */}
      <p className="formHeader">A little information about you</p>
    <Form
      form={form}
      name="register"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="address"
        value={address}
        initialValue={address}
      >
        <Input disabled={true} 
        value={address}
        name="address"
        defaultValue={address}
        />
      </Form.Item>

      <Form.Item
        name="fullname"
        label="Fullname"
        rules={[
          {
            required: true,
            message: 'Please input your Fullname!',
          },
        ]}
      >
        <Input 
        placeholder="Enter your fullname"
        name="fullname"
        type="text"/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your E-mail!',
        //   },
        // ]}
      >
        <Input 
        placeholder="Enter your email" 
        name="email"
        type="text"/>
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your phone number!',
        //   },
        // ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
          name="phone"
        />
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

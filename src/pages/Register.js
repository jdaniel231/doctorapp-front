import { Form, Input, Button } from "antd";
import React from "react";
import "../styles/RegisterStyles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/v1/users/register', values);
      dispatch(hideLoading());
      console.log("Registration successful:", response.data);
      window.location.href = '/login';
    } catch (error) {
      console.error("Registration error:", error);
      dispatch(hideLoading());
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Register Form</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input type="text" placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn btn-primary">
              Register
            </Button>
          </Form.Item>
          <Link to="/login" className="m-4">
            Already have an account? Login
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;

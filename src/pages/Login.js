import { Form, Input } from "antd";
import React from "react";
import "../styles/RegisterStyles.css";
import { Link } from "react-router-dom";

const Login = () => {

  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Login Form</h1>
          <Form.Item
            label="Email"
            name="email" // Adicionei a propriedade name aqui
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password" // Adicionei a propriedade name aqui
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Link to="/register" className="m-4">
            Don't have an account? Register
          </Link>
          <button type="primary" className="btn btn-primary">
            Enter
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;

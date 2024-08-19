import { Form, Input, message } from "antd";
import React from "react";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";


const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/v1/users/login', values);
      dispatch(hideLoading());
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        message.success('Login successful!')
        navigate('/');
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Usuário ou senha inválidos!");
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

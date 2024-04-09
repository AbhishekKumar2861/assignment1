import React, { useState } from "react";
import LOGO from "../assets/Login.jpeg";
import { Button, Checkbox, Form, Input } from "antd";

export const Login = () => {
  const [form] = Form.useForm();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCheckboxChange = (e) => {
    setButtonDisabled(!e.target.checked);
  };
  return (
    <div className="flex h-screen">
      <div className="w-[40%] ">
        <img src={LOGO} alt="Login image not loading" />
      </div>
      <div className="w-[60%]">
        <div className="flex justify-end p-2 mr-2 gap-2 ">
          Already a member? <a>Sign in</a>
        </div>
        <div className="flex flex-col justify-center items-center mt-[40px]  gap-4">
          <div className="flex flex-col justify-start w-[500px] gap-3">
            <div className="text-2xl  font-semibold">Sign up to Dribble</div>
            {/* <div className="text-xs text-red">Username has already been taken</div> */}
          </div>
          <div className="w-[450px] mt-4">
            <Form
              form={form}
              name="createAccountForm"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="flex gap-2">
                <Form.Item
                  label="Name"
                  name="name"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Username"
                  name="username"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <Form.Item
                label="Email"
                name="email"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                  {
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox onChange={handleCheckboxChange}>
                  I agree to the terms and conditions
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={buttonDisabled}
                  className="w-[200px]"
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

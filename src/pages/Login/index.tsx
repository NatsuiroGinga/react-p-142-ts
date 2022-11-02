import {Button, Card, Checkbox, Form, Input} from 'antd'
import logo from '@/assets/logo.png'
// 导入样式文件
import './index.scss'
import React from "react";

const Login: React.FC = () => {
    const onFinish = () => {

    };

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                {/* 登录表单 */}
                {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        remember: true,
                        mobile: '13811111111',
                        code: '246810'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            {
                                len: 6,
                                message: '请输入6位密码',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码"/>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"

                    >
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
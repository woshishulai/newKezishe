import style from './index.module.less';
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
import Iconmap from '@/components/common/Iconmap';
import { useState } from 'react';
import { FormState } from './Type';
import { Button, Checkbox, Form, Input } from 'antd';
import { ComponentSelectorProps } from './Type';
const FormItem = Form.Item;
const Login = () => {
    //Form.useForm() 是 Ant Design 的一个自定义 hook，用于创建表单实例。这个 hook 返回一个包含多种方法和属性的对象，用于管理表单的状态和行为。
    //form是结构出来的实例
    const [form] = Form.useForm();
    const [type, setType] = useState(0);
    const ComponentSelector = (props: ComponentSelectorProps) =>
        !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;
    const changeShowLoginComponent = (index: number) => {
        form.resetFields();
        setType(index);
    };
    const onFinish = (values: FormState) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: object) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={style['wrap']}>
            <div className="con-main-wrap">
                <div className="form">
                    <div className="change-type">
                        {['账号密码', '手机验证码'].map((text, index) => (
                            <span
                                key={index}
                                onClick={() => changeShowLoginComponent(index)}
                                className={type === index ? 'active' : ''}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                    <Form
                        name="basic"
                        //将实例绑定给表单
                        form={form}
                        initialValues={{ checked: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* {选择和切换组件} */}
                        {ComponentSelector({ form, FormItem, Input })}
                        <FormItem hasFeedback name="uuid">
                            <Input
                                prefix={Iconmap.CheckCircleOutlined}
                                placeholder="验证码"
                            ></Input>
                        </FormItem>
                        <Form.Item name="checked" valuePropName="checked">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="label">还没有账号？立即注册</p>
                </div>
            </div>
        </div>
    );
};

export default Login;

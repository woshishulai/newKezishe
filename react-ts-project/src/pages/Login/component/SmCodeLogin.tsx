import React from 'react';
import { ComponentSelectorProps } from '../Type';
import Iconmap from '@/components/common/Iconmap';
const SmCodeLogin: React.FC<ComponentSelectorProps> = (props) => {
    const { FormItem, Input } = props;
    // const { Search } = Input;
    return (
        <>
            <FormItem name="account">
                <Input prefix={Iconmap.UserOutlined} placeholder="手机号码"></Input>
            </FormItem>
            <FormItem name="password">
                {/* <Search
                    prefix={Iconmap.LockOutLined}
                    placeholder="密码"
                    enterButton="忘记密码？"
                ></Search> */}

                <Input
                    prefix={Iconmap.LockOutLined}
                    placeholder="短信验证码"
                    addonAfter="获取验证码"
                ></Input>
            </FormItem>
        </>
    );
};

export default SmCodeLogin;

import React from 'react';
import { ComponentSelectorProps } from '../Type';
import Iconmap from '@/components/common/Iconmap';
const AccountLogin: React.FC<ComponentSelectorProps> = (props) => {
    const { FormItem, Input } = props;
    // const { Search } = Input;

    return (
        <>
            <FormItem hasFeedback name="account">
                <Input prefix={Iconmap.UserOutlined} placeholder="账户名"></Input>
            </FormItem>
            <FormItem hasFeedback name="password">
                {/* <Search
                    prefix={Iconmap.LockOutLined}
                    placeholder="密码"
                    enterButton="忘记密码？"
                ></Search> */}

                <Input
                    prefix={Iconmap.LockOutLined}
                    placeholder="密码"
                    addonAfter="忘记密码？"
                ></Input>
            </FormItem>
        </>
    );
};

export default AccountLogin;

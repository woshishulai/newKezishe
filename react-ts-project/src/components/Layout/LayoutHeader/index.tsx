import style from "./index.module.less"
import { Select, Button, Space, Divider } from 'antd';
import { useState } from "react";
import HeaderInput from "./item/HeaderInput";
export function HeaderUserWrap() {
    const [isShowWelcome] = useState(false)
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="header-user">
            <div className="left-wrap">
                <Space split={<Divider type="vertical"></Divider>}>
                    <h5>您好，欢迎来到壳子社</h5>
                    {!isShowWelcome ? (
                        <>
                            <Button>登陆</Button>
                            <Button>注册</Button>
                        </>
                    ) : null}
                </Space>
            </div>
            <div className="right-wrap">
                <Space split={<Divider type="vertical"></Divider>}>
                    <Select
                        bordered={false}
                        defaultValue="lucy"
                        style={{ width: 130 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <h5>购物车 {0} 件</h5>
                    <p>免费咨询热线: 4000-888-0888</p>
                </Space>
            </div>
        </div>
    )
}
function LayoutHeader() {

    return (
        <div className={style.header}>
            <div className="con-main-wrap">
                <HeaderUserWrap></HeaderUserWrap>
                <HeaderInput></HeaderInput>
            </div>
        </div>
    );
}

export default LayoutHeader;
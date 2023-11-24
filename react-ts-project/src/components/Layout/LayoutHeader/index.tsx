import style from "./index.module.less"
import { Select, Button, Space } from 'antd';

export function HeaderUserWrap() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="header-user">
            <div className="left-wrap">
                <Space>
                    <h5>您好，欢迎来到壳子社</h5>
                    <Button >登陆</Button>
                    |
                    <Button >注册</Button>
                </Space>
            </div>
            <div className="right-wrap">
                <Space>
                    <Select
                        defaultValue="lucy"
                        style={{ width: 160 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
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
            </div>
        </div>
    );
}

export default LayoutHeader;
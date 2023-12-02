import style from "./headerInput.module.less"
import { Input } from 'antd';
import { getImageUrl } from "@/utils";
import { useState } from "react";
function CenInput() {
    const list = [
        {
            cate: '竞买'
        },
        {
            cate: '购买 '
        },
        {
            cate: '成交'
        }
    ]
    const [actives, setActives] = useState(0)
    const { Search } = Input;
    const [loading, setLoading] = useState(false)
    const changeActives = (index: number) => {
        setActives(index)
    }
    const handleSearch = (value: string) => {
        setLoading(true);
        console.log(value);
        // 在这里执行搜索逻辑
    };
    return (
        <div className="cen-input-wrap">
            <div className="cate-list">
                {list.map((item, index) => (
                    <div
                        className={`cate-item ${index === actives ? 'active' : ''}`}
                        onClick={() => changeActives(index)}
                        key={index}
                    >
                        <span>{item.cate}</span>
                        <img src={getImageUrl('login/red-down.png')} alt="" />
                    </div>
                ))}
            </div>
            <Search
                placeholder="请输入藏品名称和编号"
                allowClear
                onPressEnter={(e) => handleSearch((e.target as HTMLInputElement).value)}
                onSearch={handleSearch}
                enterButton="搜索"
                size="large"
                loading={loading}
            />
        </div>
    )
}
function HeaderInput() {
    return (
        <div className={style['header-input']}>
            <img src={getImageUrl('register/logo.png')} alt="" />
            <CenInput />
            <img src={getImageUrl('global/code.png')} alt="" />
        </div>
    );
}

export default HeaderInput;
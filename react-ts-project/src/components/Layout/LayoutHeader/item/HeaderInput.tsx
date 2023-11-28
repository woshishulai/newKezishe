import style from "./headerInput.module.less"
import { Input } from 'antd';
import { getImageUrl } from "@/utils";
import { useState } from "react";
function CenInput() {
    const { Search } = Input;
    const [loading, setLoading] = useState(false)
    const handleClick = (value: Object) => {
        setLoading(true)
        console.log(value.target.value);
    }
    return (
        <div className="cen-input-wrap">
            <Search placeholder="请输入藏品名称和编号" onPressEnter={handleClick} enterButton="搜索" size="large" loading={loading} />
        </div>
    )
}
function HeaderInput() {
    return (
        <div className={style['header-input']}>
            <img src={getImageUrl('register/logo.png')} alt="" />
            <CenInput />
        </div>
    );
}

export default HeaderInput;
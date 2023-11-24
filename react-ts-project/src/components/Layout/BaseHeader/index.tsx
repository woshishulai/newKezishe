import style from "./index.module.less"
function BaseHeader() {
    console.log('我是自定义的头部');

    return (
        <div className={style.header}>
            登录页面的头部
        </div>
    );
}

export default BaseHeader;
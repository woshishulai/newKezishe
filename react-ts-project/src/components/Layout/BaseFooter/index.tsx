import style from "./index.module.less"
function BaseFooter() {
    console.log('我是自定义的底部');
    return (
        <div className={style.footer}>
            登录页面的
        </div>
    );
}

export default BaseFooter;
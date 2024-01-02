import style from './index.module.less';
function BaseFooter() {
    console.log('我是自定义的底部');
    return (
        <div className={style.footer}>
            <img src={''} alt="" />
        </div>
    );
}

export default BaseFooter;

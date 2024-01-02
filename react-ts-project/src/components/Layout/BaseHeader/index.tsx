import style from './index.module.less';
function BaseHeader() {
    console.log('我是自定义的头部');

    return <div className={style.header}></div>;
}

export default BaseHeader;

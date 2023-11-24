import style from "./index.module.less"
function LayouFooter() {
    console.log('我是默认的底部');
    return (
        <div className={style.footer}>
            底部
        </div>
    );
}

export default LayouFooter;
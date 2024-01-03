import style from './index.module.less';
import { getImageUrl } from '@/utils';
function BaseHeader() {
    console.log('我是自定义的头部');

    return (
        <div className={style.header}>
            <img src={getImageUrl('common/logo.png')} alt="" />
            <div className="right-label">
                <p>您好，欢迎来到壳子社</p>
                <p>免费咨询热线：4000-888-0888</p>
            </div>
        </div>
    );
}

export default BaseHeader;

import style from './index.module.less';
import { getImageUrl } from '@/utils';
function BaseFooter() {
    console.log('我是自定义的底部');
    return <div className={style.footer}>登陆页的地步</div>;
}

export default BaseFooter;

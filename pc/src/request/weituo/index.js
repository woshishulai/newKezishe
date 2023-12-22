import instance from '../index';

// 获取委托栏目导航
export const getWeiTuoNavApi = () => instance.get('/Web/Entrust/Category');

// 获取栏目具体信息
export const getMenuListAPi = (query) => instance.get('/Web/Entrust/ColumnContInfo?id=' + query);
